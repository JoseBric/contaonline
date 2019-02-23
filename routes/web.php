<?php

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



// Auth::routes();
Route::fallback(function(){
    return redirect("/");
});

Route::get('login', 'Auth\LoginController@showLoginForm');
Route::post('login', 'Auth\LoginController@login')->name("login");
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

Route::post("usuarios", "UsersController@store");
Route::put("usuarios/{user}", "UsersController@update");
Route::delete("usuarios/{user}", "UsersController@destroy");
Route::get("usuarios/all", "UsersController@index");

Route::get("cuenta/all", "AccountsController@index");
Route::get("cuenta/income/{account}/{month}", "AccountsController@statusI");
Route::get("cuenta/expenses/{account}/{month}", "AccountsController@statusE");

Route::post("invoices", "InvoicesController@store");
Route::get("invoices", "InvoicesController@index");
Route::get("invoices/dates", "InvoicesController@dates");

// Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
// Route::post('register', 'Auth\RegisterController@register');

// Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm');
// Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
// Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm');
// Route::post('password/reset', 'Auth\ResetPasswordController@reset');

Route::get("/auth/google", "Auth\LoginController@redirectToProvider");
Route::get("/auth/google/callback", "Auth\LoginController@handleProviderCallback");

Route::view('/{path?}', "pages.react")
->name('react')
->middleware("auth");

Route::get('/{path?}/create', function(){return view("pages.react");})
->name('react')
->middleware("auth");



