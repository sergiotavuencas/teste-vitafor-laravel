<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Characters extends Model
{
    // Resolve problema de preenchimento do 'ID', e controla o preenchimento em massa
    protected $fillable = ['api_id', 'name', 'species', 'gender', 'location', 'image', 'url', 'created_at', 'updated_at'];
    protected $casts = [
        'location' => 'json',
    ];
}
