<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use App\Invoice;
use App\Account;

class InvoicesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $request->file("xml_input")->store("public", "facturas");
        // Storage::disk("public")->url(filelink);
        // Storage::disk("public")->get(filelink);
        // return Storage::download('filelink');d
        // $url = Storage::disk('local')->putFile("facturas", $request->file("xml_input"));

        $input = $request->file("xml_input");
        $route = Storage::disk("local")->putFile("facturas", $input);
        
        $xml = simplexml_load_string(str_replace("tfd:", "", str_replace("cfdi:", "", Storage::disk("local")->get($route))));
    
        // return $xml->Emisor["Nombre"];

        $account = Account::find($request->input("account_id"));
        if(Invoice::where("selloCFD", $xml["Sello"])->get()->first() != null) {
            return Response()->json(["error" => "Ya has subido esta factura"]);
        }

        if($account->rfc != $xml->Emisor["Rfc"] && $account->rfc != $xml->Receptor["Rfc"]) {
            return Response()->json(["error" => "No eres propietario de esta factura{$account->rfc}, {$xml->Emisor['Rfc']}, {$xml->Receptor['Rfc']}"]);
        }

        $invoice = Invoice::create([
            "account_id" => $account->id,
            "nombre_emisor" => $xml->Emisor["Nombre"],
            "rfc_emisor" => $xml->Emisor["Rfc"],
            "nombre_receptor" => $xml->Receptor["Nombre"],
            "rfc_receptor" => $xml->Receptor["Rfc"],
            "cantidad_producto" => $xml->Conceptos->Concepto["Cantidad"],
            "descripcion_producto" => $xml->Conceptos->Concepto["Descripcion"],
            "subtotal" => $xml["SubTotal"],
            "impuestos" => $xml->Impuestos["TotalImpuestosTrasladados"],
            "total" => $xml["Total"],
            "moneda" => $xml["Moneda"],
            "metodoPago" => $xml["MetodoPago"],
            "fecha" => $xml["Fecha"],
            "selloCFD" => $xml["Sello"],
            "folio_fiscal" => $xml->Complemento->TimbreFiscalDigital["UUID"],
            "file_name" => $route,
        ]);

        $response = [
            "date" => $invoice->fecha,
            "income" => $account->rfc == $invoice->rfc_emisor ? true : false,
            "invoice" => $invoice, 
        ];
        return Response()->json($response);
        
    }

    public function status(Account $account, $date, $income) {
        $year = explode("-", $date)[0];
        $month = explode("-", $date)[1];
        $expenses = $account->Invoices()
        ->whereMonth("fecha", "=", $month)
        ->whereYear("fecha", "=", $year)
        ->where($income == "true" ? "rfc_emisor" : "rfc_receptor", "=", $account->rfc)
        ->get();
        return Response()->json($expenses);
    }

    public function download(Invoice $invoice)
    {
        $url = $invoice->file_name;
        $headers = [
            "Content-Type" => "multipart/form-data",
        ];
        return Storage::download($url, $invoice->name, $headers);
    }

    public function show(Invoice $invoice)
    {
        $url = $invoice->file_name;
        // return Storage::get($url);
        return Response()->json(Storage::disk("local")->get($url));
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
