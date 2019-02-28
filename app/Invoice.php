<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $guard = [];
    
    public function Account() {
        return $this->belongsTo(Account::class);
        // BelongsToMany ?
    }
}
