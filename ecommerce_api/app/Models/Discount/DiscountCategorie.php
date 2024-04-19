<?php

namespace App\Models\Discount;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product\Categories;

class DiscountCategorie extends Model
{
    protected $fillable = [
        'discount_id',
        'category_id',
       
    ];

    public function discount()
    {
        return $this->belongsTo(Discount::class);
    }

    public function categorie()
    {
        return $this->belongsTo(Categories::class);
    }
}
