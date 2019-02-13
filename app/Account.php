<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $guard = [];

    public function Invoices() {
        return $this->hasMany(\App\Invoice::class);
    }
    public function Users() {
        return $this->belongsToMany(\App\User::class);
    }
}
