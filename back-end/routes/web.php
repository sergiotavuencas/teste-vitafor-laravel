<?php

use App\Http\Controllers\CharacterController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/fetch/page/{id}', [CharacterController::class, 'fetchPage']);
Route::get('/fetch/character/{id}', [CharacterController::class, 'fetchCharacter']);
Route::get('/save/character/{id}', [CharacterController::class, 'saveCharacter']);
Route::get('/api/characters/', [CharacterController::class, 'findAll']);
