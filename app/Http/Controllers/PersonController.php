<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function __invoke()
    {
        $persons = [
            [
                'id' => 1,
                'name' => 'Ivan',
                'age' => 20,
                'job' => 'coach'
            ],
            [
                'id' => 2,
                'name' => 'Petr',
                'age' => 28,
                'job' => 'teacher'
            ],
            [
                'id' => 3,
                'name' => 'Max',
                'age' => 26,
                'job' => 'dancer'
            ]
        ];

        return $persons;
    }
}
