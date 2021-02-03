<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public $loginAfterSignUp = true; //even worked without that
    public function me()
    {
        return auth()->user();
    }
    public function register(Request $request){
        $username = $request->username;
        $count = User::where([
            ['username','=',$username]
        ])->count();
        if($count>0){
            return response()->json(['error' => 'Username Already registered with us'],500);;
        }
        else{
        $user =  User::create([
            'First_name' => $request->First_name,
            'Last_name'  => $request->Last_name,
            'username' => $request->username,
            'password' => Hash::make($request->password),
        ]);
        $token = auth()->login($user);
        return response()->json(['data' => 'Successfully Registered','token' => $token]);
        }
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
