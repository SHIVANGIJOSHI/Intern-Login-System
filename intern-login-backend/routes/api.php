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
//basic api's
Route::get('/login/index','App\Http\Controllers\InternsController@index');
Route::post('/login/authenticate','App\Http\Controllers\InternsController@authenticate');

// api's using jwt and authentication middleware
Route::post('/login','App\Http\Controllers\AuthController@login');
Route::post('/register','App\Http\Controllers\AuthController@register');
Route::middleware('auth')->get('/me','App\Http\Controllers\AuthController@me');
Route::middleware('auth')->get('/index','App\Http\Controllers\AuthController@index');