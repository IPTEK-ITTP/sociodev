<?php

Route::view('/', 'Welcome')->name('home');
Route::get('dashboard', 'DashboardController@account');
//Route::get('/account', '')
Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
