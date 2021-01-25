<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Interns;

class InternsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Interns::all();
    }

    public function authenticate(Request $request){
        $username = request(['username']);
        $password = request(['password']);
        $count = Interns::where([
            ['username','=',$username],
            ['password','=',$password]
        ])->count();
        if($count>0){
            return response()->json(['data' => 'Successfully logged in']);
        }
        else{
            return response()->json(['error' => 'Wrong Credentials'],401);
        }
    }
}
