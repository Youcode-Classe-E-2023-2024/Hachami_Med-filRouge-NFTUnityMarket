<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ApiController;



Route::get("login", function(){
    return response()->json(['message'=>'Unauthenticated'],401);

})->name('login');



Route::post("register", [ApiController::class, "register"]);
Route::post("login", [ApiController::class, "login"]);


Route::group(["middleware" => ["auth:api"]], function(){

    Route::get("refresh", [ApiController::class, "refreshToken"]);
    Route::get("logout", [ApiController::class, "logout"]);
});