<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\User;
use App\Account;
use App\Address;

class AccountsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $accounts = $request->user()->Accounts()->get();
        $accounts = Account::with("addresses")->get();
        return Response()->json($accounts);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Response()->json($request);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            "razonSocial" => "required|max:255",
            "rfc" => "required|max:255",
            "type" => "required",
            "calle" => "string|max:255|nullable",
            "ext_num" => "string|max:255|nullable",
            "int_num" => "string|max:255|nullable",
            "zip_code" => "string|max:10|nullable",
            "col" => "string|max:255|nullable",
            "ciudad" => "string|max:255|nullable",
            "estado" => "string|max:255|nullable",
            "pais" => "string|max:255|nullable",
        ]);

        $address = Address::create([
            "street" => $request->calle,
            "ext_num" => $request->ext_num,
            "int_num" => $request->ext_num,
            "zip_code" => $request->zip_code,
            "city" => $request->ciudad,
            "state" => $request->estado,
            "country" => $request->pais,
        ]);

        $account = Account::create([
            "rfc" => $request->rfc,
            "business_name" => $request->razonSocial,
            "type" => $request->type,
            "address_id" => $address->id,
        ]);

        return $account;
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

    public function update(Request $request, $id)
    {
        $account = Account::with("addresses")->find($id);
        $input = $request->all();
        $key = array_keys($input)[0];
        $data = $input[array_keys($input)[0]];
        $send = [$key => $data];
        if(\Schema::hasColumn('accounts', $key)){
            $account->update($send);
        } else {
            $account->Addresses()->first()->update($send);
        }
        return Response()->json($account);
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
