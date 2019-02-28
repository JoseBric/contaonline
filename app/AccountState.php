<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AccountState extends Model
{
    protected $guard = [];
    
    public function Account() {
        return $this->belongsTo(Account::class);
    }
}
