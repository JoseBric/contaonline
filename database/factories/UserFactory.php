<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

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

$factory->define(App\Invoice::class, function (Faker $faker) {
    return [
        'date' => $faker->dateTimeThisDecade(),
        'key' => $faker->sha1,
        'name' => $faker->company,
        "subtotal" => $faker->randomFloat(3, 10000, 50000),
        "iva" => $faker->randomFloat(3, 2000, 5000),
        "total" => $faker->randomFloat(3, 10000, 50000),
        "address_id" => 1,
    ];
});