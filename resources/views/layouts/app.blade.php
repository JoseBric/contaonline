@include("inc.header")
    <div class="app">
        <div class="preloader">
            <div class="cssload-speeding-wheel"></div>
        </div>
        <div id="wrapper">
            @include("inc.top-navbar")
            @include("inc.left-navbar")
            <div id="page-wrapper">
                @include("inc.messages")
                @yield("content")
                <footer class="footer text-center"> 2019 &copy; Rivka </footer>
            </div>
        </div>
    </div>
@include("inc.footer")
