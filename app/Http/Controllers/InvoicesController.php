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
        $get = Storage::disk("local")->get("/facturas/IkNB7sDXwRGhdRHcBjmGxXDTf0ZUiis73r1HkELN");
        $xml = simplexml_load_string(str_replace("cfdi:", "", $get), null, LIBXML_NOERROR);
        var_dump($xml);
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
        
        $xml = simplexml_load_string(str_replace("cfdi:", "", Storage::disk("local")->get($route)));
    
        // return $xml->Emisor["Nombre"];
        // Invoice::create([
        //     "account_id" => 1,
        //     "nombre_emisor" => $xml->Emisor["Nombre"],
        //     "rfc_emisor" => $xml->Emisor["Rfc"],
        //     "nombre_receptor" => $xml->Receptor["Nombre"],
        //     "rfc_receptor" => $xml->Receptor["Rfc"],
        //     "cantidad_producto" => $xml->Conceptos->Concepto["Cantidad"],
        //     "descripcion_producto" => $xml->Conceptos->Concepto["Descripcion"],
        //     "subtotal" => $xml["SubTotal"],
        //     "impuestos" => $xml->Impuestos["TotalImpuestosTrasladados"],
        //     "total" => $xml["Total"],
        //     "moneda" => $xml["Moneda"],
        //     "metodoPago" => $xml["MetodoPago"],
        //     "fecha" => $xml["Fecha"],
        //     "selloCFD" => $xml["Sello"],
        // ]);
        // //////////////// Validar solo a esta cuena
        if(Invoice::where("selloCFD", $xml['Sello'])->get()->first() != null) {
            return "Ya has subido esta factura";
        }

        $invoice = new Invoice();

        $invoice->account_id = $request->input("account_id");
        $invoice->nombre_emisor = $xml->Emisor["Nombre"];
        $invoice->rfc_emisor = $xml->Emisor["Rfc"];
        $invoice->nombre_receptor = $xml->Receptor["Nombre"];
        $invoice->rfc_receptor = $xml->Receptor["Rfc"];
        $invoice->cantidad_producto = $xml->Conceptos->Concepto["Cantidad"];
        $invoice->descripcion_producto = $xml->Conceptos->Concepto["Descripcion"];
        $invoice->subtotal = $xml["SubTotal"];
        $invoice->impuestos = $xml->Impuestos["TotalImpuestosTrasladados"];
        $invoice->total = $xml["Total"];
        $invoice->moneda = $xml["Moneda"];
        $invoice->metodoPago = $xml["MetodoPago"];
        $invoice->fecha = $xml["Fecha"];
        $invoice->selloCFD = $xml["Sello"];

        $invoice->save();

        $account = Account::find($request->input("account_id"));

        return Response()->json($invoice);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    public function dates()
    {
        $invoices = Invoice::all();
        $dates = [];
        foreach($invoices as $invoice) {
            array_push($dates, $invoice->fecha);
        }
        return Response()->json($dates);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
