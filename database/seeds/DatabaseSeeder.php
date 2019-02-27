<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('addresses')->insert([
            'street' => "San Gelasio",
            'ext_num' => "95",
            "col" => "Amapolas",
            "city" => "Hermosillo",
            "state" => "Sonora",
            "zip_code" => "83140",
        ]);

        $user1 = \App\User::create([
            'name' => "Jose",
            'lastname' => "Bric",
            'email' => "jose.b@rivka.mx",
            "phone" => "5544668877",
            "role" => "admin",
            'email_verified_at' => now(),
            'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
            'remember_token' => str_random(10),  
        ]);

        $user2 = \App\User::create([
            'name' => "Manuel",
            'lastname' => "Garcia",
            'email' => "info@rivka.mx",
            "phone" => "6655442233",
            "role" => "admin",
            'email_verified_at' => now(),
            'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
            'remember_token' => str_random(10),  
        ]);

        $user3 = \App\User::create([
            'name' => "Andrea",
            'lastname' => "Becerra",
            'email' => "andrea.b@rivka.mx",
            "phone" => "5542228877",
            "role" => "admin",
            'email_verified_at' => now(),
            'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
            'remember_token' => str_random(10),  
        ]);

        $account = \App\Account::create([
            'rfc' => "RTE170314D6A",
            'business_name' => "Rivka",
            'type' => "pm",
            "address_id" => 1,
        ]);

        $account->Users()->sync([$user1->id, $user2->id, $user3->id]);
    }
}
