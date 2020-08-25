<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Videos extends Model
{
    protected $fillable = [
      "title", "url", "description"
    ];

    public function category() {
        return $this->belongsTo("App\Category");
    }
}
