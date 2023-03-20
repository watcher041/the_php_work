<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// トップページ
Route::get('/', function () {
    return Inertia::render('Top');
})->name('top');

// 投稿一覧、新規投稿ページを表示
Route::group([ 'middleware' => [ 'auth', 'verified'], 'prefix' => 'post', 'as' => 'post.'], function() {
    Route::get('/', function () { return Inertia::render('Post/Index'); })->name('index');
    Route::get('/new', function () { return Inertia::render('Post/New'); })->name('new');
    Route::post('/store', 'App\Http\Controllers\PostController@store')->name('store');
});

require __DIR__.'/auth.php';
