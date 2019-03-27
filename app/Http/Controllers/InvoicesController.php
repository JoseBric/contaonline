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

    public function changeState(Request $request)
    {
        $invoice = Invoice::find($request->id);
        $state = $invoice->estado;
        $newState = $invoice->estado == "cancelado" ? "vigente" : "cancelado";
        $invoice->update(["estado"=>$newState]);
        return $newState;
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
        // Storage::disk("public")->get(filelink);  xml image pdf word excel csv
        // return Storage::download('filelink');d
        // $url = Storage::disk('local')->putFile("facturas", $request->file("xml_input"));

        $input = $request->file("xml_input");
        $route = Storage::disk("local")->putFile("facturas", $input);
        
        $xml = simplexml_load_string(str_replace("tfd:", "", str_replace("cfdi:", "", Storage::disk("local")->get($route))));
    
        // return $xml->Emisor["Nombre"];

        $account = Account::find($request->input("account_id"));
        if($inv = Invoice::where("selloCFD", $xml["Sello"])->get()->first() != null) {
            return Response()->json(["error" => ["invoice" => $inv, "message" => "Ya has subido esta factura previamente"]]);
        }

        if($account->rfc != ($xml->Emisor["Rfc"] ?? $xml->Emisor["rfc"]) && $account->rfc != ($xml->Receptor["Rfc"] || $xml->Receptor["rfc"])) {
            return Response()->json(["error" => ["message" => "No eres propietario de esta factura {$account->rfc}, {$xml->Emisor['Rfc']}, {$xml->Receptor['Rfc']}"]]);
        }

        $invoice = Invoice::create([
            "account_id" => $account->id,
            "nombre_emisor" => $xml->Emisor["Nombre"] ?? $xml->Emisor["nombre"],
            "rfc_emisor" => $xml->Emisor["Rfc"] ?? $xml->Emisor["rfc"],
            "nombre_receptor" => $xml->Receptor["Nombre"] ?? $xml->Receptor["nombre"],
            "rfc_receptor" => $xml->Receptor["Rfc"] ?? $xml->Receptor["rfc"],
            "cantidad_producto" => $xml->Conceptos->Concepto["Cantidad"] ?? $xml->Conceptos->Concepto["cantidad"] ,
            "descripcion_producto" => $xml->Conceptos->Concepto["Descripcion"] ?? $xml->Conceptos->Concepto["descripcion"] ,
            "subtotal" => $xml["SubTotal"] ?? $xml["subTotal"] ,
            "impuestos" => $xml->Impuestos["TotalImpuestosTrasladados"] ?? $xml->Impuestos["totalImpuestosTrasladados"],
            "total" => $xml["Total"] ?? $xml["total"] ,
            "moneda" => $xml["Moneda"] ?? $xml["moneda"] ,
            "metodoPago" => $xml["MetodoPago"] ?? $xml["metodoDePago"] ,
            "fecha" => $xml["Fecha"] ?? $xml["fecha"] ,
            "selloCFD" => $xml["Sello"] ?? $xml["sello"] ,
            "folio_fiscal" => $xml->Complemento->TimbreFiscalDigital["UUID"] ?? $xml->Complemento->TimbreFiscalDigital["UUID"] ,
            "file_name" => $route,
        ]);

        $response = [
            "income" => $account->rfc == $invoice->rfc_emisor ? true : false,
            "invoice" => $invoice, 
            "message" => "La factura fue subida exitosamente - {$invoice->fecha}",
        ];
        return Response()->json($response);
        
    }

    public function status(Account $account, $date, $income, $array = false) {
        $year = explode("-", $date)[0];
        $month = explode("-", $date)[1];
        $expenses = $account->Invoices()
        ->whereMonth("fecha", "=", $month)
        ->whereYear("fecha", "=", $year)
        ->where($income == "true" ? "rfc_emisor" : "rfc_receptor", "=", $account->rfc)
        ->orderBy('fecha', 'ASC')
        ->get();
        if($array) {
            return $expenses;
        } 
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

    public function destroy(Invoice $invoice)
    {
        Storage::delete($invoice->file_name);
        $invoice->delete();
        return Response()->json($invoice);
    }
}
