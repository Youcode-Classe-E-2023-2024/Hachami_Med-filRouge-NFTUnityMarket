<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartShopsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cart_shops', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('product_id')->constrained()->onDelete('cascade');
            $table->string('type_discount')->nullable();
            $table->decimal('discount', 8, 2)->default(0);
            $table->integer('quantity')->default(1);
            $table->foreignId('product_size_id')->nullable()->constrained()->onDelete('cascade');
            $table->foreignId('product_color_size_id')->nullable()->constrained()->onDelete('cascade');
            $table->string('code_cupon')->nullable();
            $table->string('code_discount')->nullable();
            $table->decimal('unit_price', 8, 2);
            $table->decimal('subtotal', 8, 2);
            $table->decimal('total', 8, 2);
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
        Schema::dropIfExists('cart_shops');
    }
}
