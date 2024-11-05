<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    use HasFactory;

    protected $fillable = [
        'api_id',
        'user_id',
        'name',
        'species',
        'gender',
        'location',
        'image',
        'url',
        'created_at',
        'updated_at'
    ];
    protected $casts = [
        'location' => 'json',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
