<?php

// Auth::routes();

Route::fallback(function(){
    return redirect("/");
});

Route::get('login', 'Auth\LoginController@showLoginForm');
Route::post('login', 'Auth\LoginController@login')->name("login");
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

Route::get("/auth/google", "Auth\LoginController@redirectToProvider");
Route::get("/auth/google/callback", "Auth\LoginController@handleProviderCallback");

Route::post("usuarios", "UsersController@store");
Route::put("usuarios/{user}", "UsersController@update");
Route::delete("usuarios/{user}", "UsersController@destroy");
Route::get("usuarios/all", "UsersController@index");

Route::get("cuenta/all", "AccountsController@index");
Route::post("cuenta", "AccountsController@store");
Route::put("cuentas/{id}", "AccountsController@update");
Route::delete("cuentas/{id}", "AccountsController@destroy");

Route::post("invoices", "InvoicesController@store");
Route::post("invoices/state", "InvoicesController@changeState");
Route::get("invoices", "InvoicesController@index");
Route::get("invoices/{invoice}", "InvoicesController@download");
Route::get("invoices/{account}/{date}/{income}", "InvoicesController@status");
Route::get("invoices/raw/{invoice}", "InvoicesController@show");
Route::delete("invoices/{invoice}", "InvoicesController@destroy");

Route::post("account_states", "AccountStatesController@store");
Route::get("account_states", "AccountStatesController@index");
Route::get("account_states/{account}/{date}", "AccountStatesController@status");
Route::get("download/account_states/{accountState}", "AccountStatesController@download");
Route::get("account_states/{accountState}", "AccountStatesController@show");
Route::delete("account_states/{accountState}", "AccountStatesController@destroy");
Route::put("account_states/{accountState}", "AccountStatesController@update");

Route::post("documents", "DocumentsController@store");
Route::get("documents", "DocumentsController@index");
Route::get("documents/{account}/{date}", "DocumentsController@status");
Route::get("download/documents/{document}", "DocumentsController@download");
Route::get("documents/{document}", "DocumentsController@show");
Route::delete("documents/{document}", "DocumentsController@destroy");

Route::post("notes", "NotesController@store");
// Route::get("notes", "NotesController@index");
Route::get("notes/{account}/{date}", "NotesController@status");
Route::delete("notes/{note}", "NotesController@destroy");

Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register', 'Auth\RegisterController@register');

Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');


Route::view('/{path?}', "pages.react")
->name('react')
->middleware("auth");

Route::get('/{path?}/create', function(){return view("pages.react");})
->name('react')
->middleware("auth");
