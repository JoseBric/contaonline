<?php

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
Route::post("cuenta", "AccountsController@store");

Route::post("invoices", "InvoicesController@store");
Route::get("invoices", "InvoicesController@index");
Route::get("invoices/{account}/{date}/{income}", "InvoicesController@status");

Route::post("account_states", "AccountStatesController@store");
Route::get("account_states", "AccountStatesController@index");
Route::get("account_states/{account}/{date}", "AccountStatesController@status");
Route::get("account_states/{accountState}", "AccountStatesController@download");

Route::post("documents", "DocumentsController@store");
Route::get("documents", "DocumentsController@index");
Route::get("documents/{account}/{date}", "DocumentsController@status");

Route::post("notes", "NotesController@store");
Route::get("notes", "NotesController@index");
Route::get("notes/{account}/{date}", "NotesController@status");

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
