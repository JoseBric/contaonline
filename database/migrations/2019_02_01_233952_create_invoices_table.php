<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("account_id")->unsigned();
            $table->integer('address_id')->unsigned();
            $table->date('date');
            $table->text('key');
            $table->string('name');
            $table->double('subtotal', 7, 4);
            $table->double('iva', 7, 4);
            $table->double('total', 7, 4);
            $table->timestamps();

            $table->foreign("address_id")
            ->references("id")
            ->on("addresses");
            $table->foreign("account_id")
            ->references("id")
            ->on("accounts");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoices');
    }
}
