<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $guard = [];
    protected $fillable = ["account_id"];
    public function Account() {
        return $this->belongsTo(Account::class);
    }
}
