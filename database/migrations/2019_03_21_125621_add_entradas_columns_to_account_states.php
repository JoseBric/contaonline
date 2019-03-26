<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddEntradasColumnsToAccountStates extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('account_states', function (Blueprint $table) {
            $table->double('entrada_interna', 15, 2);
            $table->double('entrada_extranjera', 15, 2);
            $table->double('entrada_total', 15, 2);
            $table->double('salida', 15, 2);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('account_states', function (Blueprint $table) {
            // $table->dropColumn("entrada_interna");
            // $table->dropColumn("entrada_extranjera");
            // $table->dropColumn("entrada_total");
            $table->dropColumn("salida");
        });
    }
}
