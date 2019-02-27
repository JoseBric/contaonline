<?php

use Faker\Generator as Faker;
use Carbon\Carbon;

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'name' => $faker->firstName,
        'lastname' => $faker->lastname,
        'email' => $faker->unique()->safeEmail,
        "phone" => $faker->e164PhoneNumber,
        "role" => "normal",
        'email_verified_at' => now(),
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'remember_token' => str_random(10),  
    ];
});

$factory->define(App\Account::class, function (Faker $faker) {
    return [
        'rfc' => $faker->swiftBicNumber,
        'business_name' => $faker->name,
        'type' => "pf",
        "address_id" => 1,
    ];
});
