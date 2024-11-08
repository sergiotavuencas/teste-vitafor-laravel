<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Caminhos Permitidos para CORS
    |--------------------------------------------------------------------------
    |
    | Configure os caminhos da aplicação onde as permissões CORS devem ser aplicadas.
    | O exemplo abaixo permite CORS para qualquer rota começando com 'api/'.
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    /*
    |--------------------------------------------------------------------------
    | Métodos Permitidos
    |--------------------------------------------------------------------------
    |
    | Especifique quais métodos HTTP são permitidos. '*' permite todos.
    |
    */

    'allowed_methods' => ['*'],

    /*
    |--------------------------------------------------------------------------
    | Origens Permitidas
    |--------------------------------------------------------------------------
    |
    | Especifique quais URLs de origem podem acessar a API. '*' permite qualquer origem.
    | No caso de um ambiente de desenvolvimento, especifique o URL do frontend.
    |
    */

    'allowed_origins' => ['http://localhost:5173', 'http://127.0.0.1:5173'],

    /*
    |--------------------------------------------------------------------------
    | Padrões de Origens Permitidas
    |--------------------------------------------------------------------------
    |
    | Configure padrões de origens permitidas usando expressões regulares, se necessário.
    |
    */

    'allowed_origins_patterns' => [],

    /*
    |--------------------------------------------------------------------------
    | Cabeçalhos Permitidos
    |--------------------------------------------------------------------------
    |
    | Defina os cabeçalhos que podem ser enviados para a aplicação. '*' permite todos.
    |
    */

    'allowed_headers' => ['*'],

    /*
    |--------------------------------------------------------------------------
    | Cabeçalhos Expostos
    |--------------------------------------------------------------------------
    |
    | Defina os cabeçalhos que podem ser expostos ao navegador.
    |
    */

    'exposed_headers' => [],

    /*
    |--------------------------------------------------------------------------
    | Tempo de Vida de Pré-voo (Preflight)
    |--------------------------------------------------------------------------
    |
    | Defina o tempo em segundos para cache de respostas de requisições preflight.
    |
    */

    'max_age' => 0,

    /*
    |--------------------------------------------------------------------------
    | Suporte a Credenciais
    |--------------------------------------------------------------------------
    |
    | Habilite se a aplicação precisar suportar cookies em requisições CORS.
    |
    */

    'supports_credentials' => true,
];
