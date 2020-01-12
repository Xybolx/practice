<?php

namespace App;

class Hater extends User
{

    protected $fillable = ['user_id'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
