<?php

namespace App\Http\Controllers;
use Response;
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
        ->orderBy('name', 'ASC')
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
        $ext = pathinfo($url, PATHINFO_EXTENSION) == "" ? "xml" : pathinfo($url, PATHINFO_EXTENSION);
        $mimes = new \Mimey\MimeTypes;
        $type = $mimes->getMimeType($ext);
        $file = Storage::disk("local")->get($url);
        
        return Response::make($file, 200, [
            'Content-Type' => "$type",
            "Content-Disposition" => "inline; filename='$url'"
        ]);
    }

    public function destroy(Document $document)
    {
        Storage::delete($document->file_name);
        $document->delete();
        return Response()->json($document);
    }
} 
