@include("inc.header")
    <div class="app">
        <div class="preloader">
            <div class="cssload-speeding-wheel"></div>
        </div>
        <div id="wrapper">
            @include("inc.top-navbar")
            @include("inc.left-navbar")
            <div id="page-wrapper">
                <h1>Hola a todos</h1>
                @include("inc.messages")
                @yield("content")
                @include("inc.footer")
            </div>
        </div>
    </div>
    <script src="plugins/bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bootstrap/dist/js/tether.min.js"></script>
    <script src="bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="plugins/bower_components/bootstrap-extension/js/bootstrap-extension.min.js"></script>
    <script src="js/jquery.slimscroll.js"></script>
    <script src="plugins/bower_components/counterup/jquery.counterup.min.js"></script>
    <script src="plugins/bower_components/morrisjs/morris.js"></script>
    <script src="js/custom.min.js"></script>
    <script src="js/dashboard1.js"></script>
    <script src="plugins/bower_components/jquery-sparkline/jquery.sparkline.min.js"></script>
    <script src="plugins/bower_components/jquery-sparkline/jquery.charts-sparkline.js"></script>
    <script type="text/javascript">
    </script>
</body>

</html>
