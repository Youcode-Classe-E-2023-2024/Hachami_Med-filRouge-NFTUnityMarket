<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('sku')->nullable();
            $table->decimal('price_dsc', 10, 2); 
            $table->decimal('price_dhs', 10, 2); 
            $table->text('tags')->nullable();
            $table->text('description')->nullable();
            $table->text('summary')->nullable();
            $table->string('state')->nullable();
            $table->text('images')->nullable();
            $table->integer('stock')->nullable();
            $table->foreignId('category_id')->constrained()->onDelete('cascade');
            $table->text('interview')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
