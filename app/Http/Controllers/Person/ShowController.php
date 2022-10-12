<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Http\Requests\Person\StoreRequest;
use App\Models\Person;

class ShowController extends Controller
{
    public function __invoke(Person $person)
    {
        return $person;
    }
}
