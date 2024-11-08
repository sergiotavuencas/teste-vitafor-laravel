<?php

namespace App\Http\Controllers;

use App\Models\Character;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Gate;
use Symfony\Component\HttpFoundation\Response;

class CharacterController extends Controller implements HasMiddleware
{
    private function characterDTO(Character $character)
    {
        return [
            'api_id' => $character->api_id,
            'user_id' => $character->user_id,
            'name' => $character->name,
            'species' => $character->species,
            'image' => $character->image,
            'url' => $character->url,
        ];
    }

    public static function middleware()
    {
        return [
            new Middleware('auth:sanctum', except: ['index', 'show'])
        ];
    }

    public function index(Request $request)
    {
        // Define o número de registros por página com um valor padrão de 20
        $perPage = $request->query('per_page', 10);

        // Usa paginação para os personagens
        $paginatedCharacters = Character::paginate($perPage);

        // Aplica o DTO em cada personagem da coleção paginada
        $characters = $paginatedCharacters->getCollection()->map(function ($character) {
            return $this->characterDTO($character);
        });

        // Constroi o array `info` com os dados de paginação
        $info = [
            'total' => $paginatedCharacters->total(),
            'pages' => $paginatedCharacters->lastPage(),
            'next' => $paginatedCharacters->nextPageUrl(),
            'prev' => $paginatedCharacters->previousPageUrl(),
        ];

        // Retorna a estrutura JSON desejada
        return response()->json([
            'info' => $info,
            'characters' => $characters,
        ], Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $character = Character::where('api_id', $request->api_id)->first();
        $response = response([
            'message' => 'The character is already created.'
        ], Response::HTTP_CONFLICT);

        if ($character == null) {
            $fields = $request->validate([
                'api_id' => 'required',
                'user_id' => 'required',
                'name' => 'required',
                'species' => 'required',
                'image' => 'required',
                'url' => 'required'
            ]);

            $character = $request->user()->characters()->create($fields);

            $response = response([
                'character' => $this->characterDTO($character)
            ], Response::HTTP_CREATED);
        }

        return $response;
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $character = Character::where('api_id', $id)->first();

        if ($character) {
            return response([
                'character' => $this->characterDTO($character)
            ], Response::HTTP_OK);
        } else {
            return response([
                'message' => 'Character not found.'
            ], Response::HTTP_NOT_FOUND);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(int $id, Request $request)
    {
        $character = Character::where('api_id', $id)->first();
        Gate::authorize('modify', $character);

        $fields = $request->validate([
            'name' => 'required',
            'species' => 'required',
            'image' => 'required',
            'url' => 'required',
        ]);

        $character->updated_at = now();
        $character->update($fields);

        return response([
            'character' => $this->characterDTO($character)
        ], Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $character = Character::where('api_id', $id)->first();
        Gate::authorize('modify', $character);

        $character->delete();
        return response([], Response::HTTP_OK);
    }
}
