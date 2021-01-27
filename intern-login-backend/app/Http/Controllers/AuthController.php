<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function me()
    {
        return auth()->user();
    }
    public function register(Request $request){
        User::create([
            'First_name' => $request->First_name,
            'Last_name'  => $request->Last_name,
            'username' => $request->username,
            'password' => Hash::make($request->password),
        ]);
        return response()->json(['messg'=>'Success']);
    }
    public function login(){
        $credentials = request()->only(['username','password']);
        if($token = auth()->attempt($credentials))
            return response()->json(['data' => 'Successfully logged in','token' => $token]);
        else
        return response()->json(['error' => 'Wrong Credentials'], 401);
    }
    public function index()
    {
        return User::all();
    }
}
