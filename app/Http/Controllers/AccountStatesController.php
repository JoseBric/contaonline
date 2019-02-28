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

        $accState->account_id = $account->id;
        $accState->name = $input->getClientOriginalName();
        $accState->file_name = $route;

        $accState->save();

        $response = [
            "uploaded_at" => $accState->uploaded_at,
            "account_state" => $accState, 
        ];
        return Response()->json($response);
    }

    public function status(Account $account, $date) {
        $year = explode("-", $date)[0];
        $month = explode("-", $date)[1];
        $accountStates = $account->AccountStates()
        ->whereMonth("created_at", "=", $month)
        ->whereYear("created_at", "=", $year)
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
}
