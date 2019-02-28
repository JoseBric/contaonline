@extends("layouts.app")
@section("content")
    <div id="app" user={{ json_encode(Auth::User()) }}></div>
    <div id="modal"></div>
@endsection