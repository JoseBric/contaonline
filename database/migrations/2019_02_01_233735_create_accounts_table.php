<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('rfc')->unique()->nullable();
            $table->string('business_name')->nullable();
            $table->string('type')->nullable();
            $table->integer('address_id')->unsigned();
            $table->timestamps();
            $table->foreign("address_id")
            ->references("id")
            ->on("addresses");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('accounts');
    }
}
