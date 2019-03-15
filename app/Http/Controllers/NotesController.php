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
        ->whereMonth("date", "=", $month)
        ->whereYear("date", "=", $year)
        ->orderBy('date', 'ASC')
        ->get();
        return Response()->json($notes);
    }

    public function store(Request $request) {
        $note = new Note();
    
        $date = explode("-", $request->date);
        $date = "{$date[0]}-{$date[1]}-01";

        $note->account_id = $request->input("account_id");
        $note->content = $request->input("content");
        $note->title = $request->input("title");
        $note->date = $date;
    
        $note->save();
    
        $response = [
            "date" => $note->date,
            "note" => $note, 
        ];
        return Response()->json($response);
    }

    public function destroy(Note $note)
    {
        $note->delete();
        return Response()->json($note);
    }
}
