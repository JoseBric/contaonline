<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $guarded = [];

    public function Invoices() {
        return $this->hasMany(\App\Invoice::class);
    }
    public function AccountStates() {
        return $this->hasMany(\App\AccountState::class);
    }
    public function Documents() {
        return $this->hasMany(\App\Document::class);
    }
    public function Notes() {
        return $this->hasMany(\App\Note::class);
    }
    public function Users() {
        return $this->belongsToMany(\App\User::class);
    }
}
