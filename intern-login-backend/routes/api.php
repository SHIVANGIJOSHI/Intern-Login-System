<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use App\Models\Interns;
use App\Models\User;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|//Hash::make('pass');
*/

Route::get('/login/index','App\Http\Controllers\InternsController@index');
Route::post('/login/authenticate','App\Http\Controllers\InternsController@authenticate');
Route::post('/login/token-auth',function(){
    $credentials = request()->only(['username','password']);
    $token = auth()->attempt($credentials);
    return $token;
});
Route::get('/login/user-create',function(){
    User::create([
        'First_name' => 'Shivangi',
        'Last_name'  => 'Joshi',
        'username' => 'sj@docquity.com',
        'password' => Hash::make('SJoshi@7#')
    ]);
    return response()->json(['messg'=>'Success']);
});
Route::middleware('auth')->get('/me',function (){
    return auth()->user();
});