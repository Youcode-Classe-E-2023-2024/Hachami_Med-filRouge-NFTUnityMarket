<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Sale\Sale;
use App\Models\Product\Product;

class AdminController extends Controller
{

        // List All Users (GET)
    public function listUsers(Request $request)
    {
        $userdata = auth()->user();

        if($userdata->is_admin == "1"){
          
            $search = $request ->input('search');
            $query = User::query();

            if($search)
            {
                $query->where('name','like', '%' .$search. '%')
                ->orWhere('email','like', '%' .$search. '%');
            }
            $users = $query->get();
            
            return response()->json([
                "status"=> true,
                "messages"=> "Users",
                "data" => $users
            ]);
        }
        else{
            return response()->json([
                "status"=> false,
                "messages"=> "Unauthorized",
            ], 401);

        }


    }
    

}
