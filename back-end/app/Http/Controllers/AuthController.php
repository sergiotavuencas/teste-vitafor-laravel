<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function user()
    {
        return Auth::user();
    }

    public function register(Request $request)
    {
        return User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password'))
        ]);
    }

    public function login(Request $request)
    {
        // Verifica as credenciais
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response([
                'message' => 'Invalid credentials'
            ], Response::HTTP_UNAUTHORIZED);
        }

        // Limpa tokens existentes (opcional)
        $user = Auth::user();
        $user->tokens()->delete(); // Deleta tokens antigos

        // Cria um novo token JWT
        $token = $user->createToken('token')->plainTextToken;

        // Cria o cookie JWT
        $cookie = cookie('jwt', $token, 60 * 24); // Expira em 1 dia

        return response([
            'message' => 'Success',
            // 'jwt' => $token
        ])->withCookie($cookie); // Envia o token no cookie
    }

    public function logout()
    {
        $cookie = Cookie::forget('jwt');

        return response([
            'message' => 'Success'
        ])->withCookie($cookie);
    }
}
