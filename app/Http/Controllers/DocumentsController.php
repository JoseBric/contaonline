<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Account;
use App\Document;

class DocumentsController extends Controller
{
    public function store(Request $request)
    {
        $input = $request->file("document_input");
        $route = Storage::disk("local")->putFile("documents", $input);
        
        $account = Account::find($request->input("account_id"));

        $document = new Document();

        $document->account_id = $account->id;
        $document->name = $input->getClientOriginalName();
        $document->file_name = $route;

        $document->save();

        $response = [
            "uploaded_at" => $document->uploaded_at,
            "document" => $document, 
        ];
        return Response()->json($response);
    }

    public function status(Account $account, $date) {
        $year = explode("-", $date)[0];
        $month = explode("-", $date)[1];
        $documents = $account->Documents()
        ->whereMonth("created_at", "=", $month)
        ->whereYear("created_at", "=", $year)
        ->get();
        return Response()->json($documents);
    }

    public function download(Document $document) {
        $url = $document->file_name;
        $headers = [
            "Content-Type" => "multipart/form-data",
        ];
        return Storage::download($url, $document->name, $headers);
    }
    
    public function show(Document $document) {
        $url = $document->file_name;
        Storage::disk("local")->url($url);
        return "<embed src=`$url` type=`application/pdf` width=`100%` height=`600px` />";
    }
}
