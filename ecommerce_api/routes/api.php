<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ApiController;



Route::get("login", function(){
    return response()->json(['message'=>'Unauthenticated'],401);

})->name('login');



Route::post("register", [ApiController::class, "register"]);
Route::post("login", [ApiController::class, "login"]);