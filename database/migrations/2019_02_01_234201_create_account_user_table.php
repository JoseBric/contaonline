<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAccountUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('account_user', function (Blueprint $table) {
            $table->integer("account_id")->unsigned();
            $table->integer("user_id")->unsigned();
            $table->foreign("account_id")
                ->references("id")
                ->on("accounts");
            $table->foreign("user_id")
                ->references("id")
                ->on("users");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('account_user');
    }
}
