<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\AccountState;
use App\Invoice;
use App\Account;

class ReportesController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Account $account, $firstMonth, $lastMonth)
    {
        $reportes = [];
        foreach($this->MonthsBetween($firstMonth, $lastMonth) as $month){
            $invCont = new InvoicesController;
            $accStatesCont = new AccountStatesController;
            $totalIncome = 0;
            $totalExpenses = 0;
            $facturas = 0;
            $entradaMx = 0;
            $entradaExtr = 0;
            $entradaTotal = 0;
            $salida = 0;
            foreach ($accStatesCont->status($account, $month, true) as $accState) {
                $entradaMx += $accState->entrada_interna;
                $entradaExtr += $accState->entrada_extranjera;
                $entradaTotal += $accState->entrada_total;
                $salida += $accState->salida;
            }
            foreach ($invCont->status($account, $month, true, true) as $invoice) {
                $totalIncome += $invoice->total;
                $facturas++;
            }
            foreach ($invCont->status($account, $month, false, true) as $invoice) {
                $totalExpenses += $invoice->total;
                $facturas++;
            }
            if($totalIncome == 0 && $totalExpenses == 0 && $facturas == 0 && $entradaMx == 0 && $entradaExtr == 0 && $entradaTotal == 0 && $salida == 0){
                continue;
            }
            $reporte = [
                "mes" => $month,
                "ingresos" => $totalIncome,
                "egresos" => $totalExpenses,
                "facturas" => $facturas, 
                "entrada_mx" => $entradaMx,
                "entrada_extr" => $entradaExtr,
                "entrada_total" => $entradaTotal,
                "salida" => $salida,
            ]; 
            array_push($reportes, $reporte);
        };
        return Response()->json($reportes);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }

    private function MonthsBetween($first, $last) {
        $start    = (new \DateTime($first))->modify('first day of this month');
        $end      = (new \DateTime($last))->modify('first day of next month');
        $interval = \DateInterval::createFromDateString('1 month');
        $period   = new \DatePeriod($start, $interval, $end);
        $res = [];
        foreach ($period as $dt) {
            array_push($res, $dt->format("Y-m"));
        }
        return $res;
    }
}
