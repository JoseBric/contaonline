@if(Session::has("success") || Session::has("warning") || Session::has("danger"))
    <div id="messages-alert">
        @if(Session::has('success'))
            <div class="alert alert-success">{{ Session::get('success') }}</div>
        @endif
        @if(Session::has('warning'))
            <div class="alert alert-warning">{{ Session::get('warning') }}</div>
        @endif
        @if(Session::has('danger'))
            <div class="alert alert-danger">{{ Session::get('danger') }}</div>
        @endif
    </div>
    <script>
        setTimeout(() => {
            document.querySelector("#messages-alert").style.display = "none"
        }, 5000);
    </script>
@endif