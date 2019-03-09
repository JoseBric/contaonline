<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Note;
use App\Account;
use Response;

class NotesController extends Controller
{
    public function status(Account $account, $date) {
        $year = explode("-", $date)[0];
        $month = explode("-", $date)[1];
        $notes = $account->Notes()
        ->whereMonth("created_at", "=", $month)
        ->whereYear("created_at", "=", $year)
        ->orderBy('created_at', 'ASC')
        ->get();
        return Response()->json($notes);
    }

    public function store(Request $request) {
        $note = new Note();
    
        $note->account_id = $request->input("account_id");
        $note->content = $request->input("content");
        $note->title = $request->input("title");
    
        $note->save();
    
        $response = [
            "uploaded_at" => $note->uploaded_at,
            "note" => $note, 
        ];
        return Response()->json($response);
    }
}
