<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    protected function redirectTo(Request $request)
    {
        if (! $request->expectsJson()) {
            return route('login');
        }
    }

    // public function handle($request, Closure $next, ...$guards)
    // {
    //     if ($jwt = $request->cookie('jwt')) {
    //         $decodedJwt = urldecode($jwt); // Decodifica o JWT
    //         $request->headers->set('Authorization', 'Bearer ' . $decodedJwt);
    //     }

    //     return parent::handle($request, $next, ...$guards);
    // }
}
