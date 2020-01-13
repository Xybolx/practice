<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Hater;
use App\User;
use Faker\Generator as Faker;

$factory->define(Hater::class, function (Faker $faker) {

    return ['user_id' => function () {
        return factory(User::class)->create()->id;
    },
    ];
});
