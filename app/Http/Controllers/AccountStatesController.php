<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AccountState;
use App\Account;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class AccountStatesController extends Controller
{
    public function index()
    {
        $get = Storage::disk("local")->get("/facturas/IkNB7sDXwRGhdRHcBjmGxXDTf0ZUiis73r1HkELN");
        $xml = simplexml_load_string(str_replace("cfdi:", "", $get), null, LIBXML_NOERROR);
        var_dump($xml);
    }

    public function store(Request $request)
    {
        $input = $request->file("account_state_input");
        $route = Storage::disk("local")->putFile("accountStates", $input);
        
        $account = Account::find($request->input("account_id"));

        $accState = new AccountState();
        $date = explode("-", $request->input("date"));
        $date = "{$date[0]}-{$date[1]}-01";
        $accState->account_id = $account->id;
        $accState->name = $input->getClientOriginalName();
        $accState->entrada_interna = $request->input("entrada_interna");
        $accState->entrada_extranjera = $request->input("entrada_extranjera");
        $accState->entrada_total = $request->input("entrada_total");
        $accState->salida = $request->input("salida");
        $accState->file_name = $route;
        $accState->date = $date;

        $accState->save();

        $response = [
            "date" => $accState->date,
            "account_state" => $accState, 
        ];
        return Response()->json($response);
    }

    public function update(Request $request, AccountState $accountState) {
        $input = $request->all();
        $key = array_keys($input)[0];
        $data = $input[array_keys($input)[0]];
        $send = [$key => $data];
        $accountState->update($send);
        return Response()->json($accountState);
    }

    public function status(Account $account, $date) {
        $year = explode("-", $date)[0];
        $month = explode("-", $date)[1];
        $accountStates = $account->AccountStates()
        ->whereMonth("date", "=", $month)
        ->whereYear("date", "=", $year)
        ->orderBy('name', 'ASC')
        ->get();
        return Response()->json($accountStates);
    }

    public function download(AccountState $accountState) {
        $url = $accountState->file_name;
        $headers = [
            "Content-Type" => "multipart/form-data",
        ];
        return Storage::download($url, $accountState->name, $headers);
    }
    public function show(AccountState $accountState) {
        $url = $accountState->file_name;
        $ext = pathinfo($url, PATHINFO_EXTENSION) == "" ? "xml" : pathinfo($url, PATHINFO_EXTENSION);
        $mimes = new \Mimey\MimeTypes;
        $type = $mimes->getMimeType($ext);
        $file = Storage::disk("local")->get($url);
        
        return \Response::make($file, 200, [
            'Content-Type' => "$type",
            "Content-Disposition" => "inline; filename='$url'"
        ]);
    }

    public function destroy(AccountState $accountState)
    {
        Storage::delete($accountState->file_name);
        $accountState->delete();
        return Response()->json($accountState);
    }
}
