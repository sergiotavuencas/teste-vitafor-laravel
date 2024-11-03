<?php

namespace App\Http\Controllers;

use App\Models\Characters;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Laravel\Pail\ValueObjects\Origin\Console;

class CharacterController extends Controller
{
    public function fetchPage(int $page)
    {
        // Realiza a requisição à API e obtem o JSON de acordo com a página
        $response = Http::withoutVerifying()->get("https://rickandmortyapi.com/api/character", ['page' => $page]);


        if ($response->successful()) {
            // Extrai apenas os personagens
            $characters = $response->json('results');
            $total = count($characters);
            $fetchedCharacters = array();

            // Itera sobre cada personagem e salva no banco de dados
            foreach ($characters as $characterData) {
                $character = new Characters();

                $character->id = $characterData['id'];
                $character->name = $characterData['name'];
                $character->species = $characterData['species'];
                $character->gender = $characterData['gender'];
                $character->location = $characterData['location'];
                $character->image = $characterData['image'];
                $character->url = $characterData['url'];
                $character->created_at = $characterData['created'];

                array_push($fetchedCharacters, $character);
            }

            return response()->json(['total' => $total, 'characters' => $fetchedCharacters]);
        }
    }

    public function fetchCharacter(int $id)
    {
        $character = Characters::where('api_id', $id)->first();
        $from_db = true;

        if (!$character) {
            // Realiza a requisição à API e obtem o JSON do personagem
            $response = Http::withoutVerifying()->get("https://rickandmortyapi.com/api/character/{$id}");
            $from_db = false;


            if ($response->successful()) {
                $character = new Characters();

                $character->api_id = $response->json('id');
                $character->name = $response->json('name');
                $character->species = $response->json('species');
                $character->gender = $response->json('gender');
                $character->location = $response->json('location');
                $character->image = $response->json('image');
                $character->url = $response->json('url');
                $character->created_at = $response->json('created');
            }
        }

        return response()->json(['from_db' => $from_db, 'character' => $character]);
    }

    public function saveCharacter(int $id)
    {
        // Realiza a requisição à API e obtem o JSON do personagem
        $response = Http::withoutVerifying()->get("https://rickandmortyapi.com/api/character/{$id}");

        if ($response->successful()) {
            Characters::updateOrCreate(
                ['api_id' => $response->json('id')], // Condição de identificação para não duplicar
                [
                    'name' => $response->json('name'),
                    'species' => $response->json('species'),
                    'gender' => $response->json('gender'),
                    'location' => $response->json('location'),
                    'image' => $response->json('image'),
                    'url' => $response->json('url'),
                    'created_at' => $response->json('created'), // Usa a data original de criação
                    'updated_at' => now()
                ]
            );

            return response()->json(['response' => 'Save successfull']);
        }
    }

    public function findAll() {
        $characters = Characters::all();
        $total = count($characters);

        return response()->json(['total' => $total, 'characters' => $characters]);
    }

    public function deleteById() {
        $characters = Characters::all();
        $total = count($characters);

        return response()->json(['total' => $total, 'characters' => $characters]);
    }

    public function show()
    {
        $data['characters'] = Characters::all();
        return view('welcome', $data);
    }
}
