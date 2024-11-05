<?php

namespace App\Http\Controllers;

use App\Models\Character;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Gate;

class CharacterController extends Controller implements HasMiddleware
{
    public static function middleware()
    {
        return [
            new Middleware('auth:sanctum', except: ['index', 'show'])
        ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Character::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'api_id' => 'required',
            'user_id' => 'required',
            'name' => 'required',
            'species' => 'required',
            'gender' => 'required',
            'location' => 'required',
            'image' => 'required',
            'url' => 'required',
            'created_at' => 'required'
        ]);

        $character = $request->user()->characters()->create($fields);

        return response([
            'character' => $character
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Character $character)
    {
        return $character;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Character $character)
    {
        Gate::authorize('modify', $character);

        $fields = $request->validate([
            'api_id' => 'required',
            'user_id' => 'required',
            'name' => 'required',
            'species' => 'required',
            'gender' => 'required',
            'location' => 'required',
            'image' => 'required',
            'url' => 'required',
            'created_at' => 'required'
        ]);

        $character->update($fields);

        return response([
            'character' => $character
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Character $character)
    {
        Gate::authorize('modify', $character);

        $character->delete();

        return response([
            'message' => 'OK'
        ]);
    }
}
