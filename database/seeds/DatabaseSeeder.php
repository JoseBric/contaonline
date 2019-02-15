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

        factory(App\User::class, 10)->create()->each(function ($user) {
            $accounts = factory(App\Account::class, 5)->create(["user_id"=>$user->id])->each(function($account) use($user){
                $user->Accounts()->attach($account->id);
                $invoices = factory(App\Invoice::class, 30)->create(["account_id" => $account->id]);
            });
        });
    }
}
