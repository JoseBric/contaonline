<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAccountStatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('account_states', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("account_id")->unsigned();
            
            $table->string("name");
            $table->string("file_name", 500)->nullable();

            $table->foreign("account_id")
            ->references("id")
            ->on("accounts");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('account_states');
    }
}
