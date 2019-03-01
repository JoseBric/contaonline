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
            
            $table->string("nombre_emisor",255);
            $table->string("rfc_emisor",255);
            
            $table->string("nombre_receptor",255);
            $table->string("rfc_receptor",255);
            
            $table->integer("cantidad_producto");
            $table->string("descripcion_producto");
            $table->double('subtotal', 15, 2);
            $table->double('impuestos', 15, 2);
            $table->double('total', 15, 2);
            
            $table->string("moneda");
            $table->string("metodoPago");

            $table->dateTime('fecha');
            $table->string('selloCFD', 500)->unique();
            $table->string("folio_fiscal", 500)->unique();

            $table->string("estado", 50)->nullable();
            
            $table->foreign("account_id")
            ->references("id")
            ->on("accounts");

            $table->string("file_name", 500)->nullable();
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
        Schema::dropIfExists('invoices');
    }
}
