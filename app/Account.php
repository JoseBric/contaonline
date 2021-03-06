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
    public function Addresses() {
        return $this->belongsTo(\App\Address::class, "address_id");
    }
    public static function boot() {
        parent::boot();

        static::deleting(function($account) {
             $account->Invoices()->delete();
             $account->AccountStates()->delete();
             $account->Documents()->delete();
             $account->Notes()->delete();
        });
    }
}
