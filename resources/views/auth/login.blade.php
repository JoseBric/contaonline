@extends("layouts.app")
@section("content")
<link rel="icon" type="image/png" sizes="16x16" href="../plugins/images/favicon.png">
<!-- Bootstrap Core CSS -->
{{-- <link href="bootstrap/dist/css/bootstrap.min.css" rel="stylesheet"> --}}
{{-- <link href="../plugins/bower_components/bootstrap-extension/css/bootstrap-extension.css" rel="stylesheet"> --}}
<!-- animation CSS -->
<link href="css/animate.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<link href="css/colors/blue.css" id="theme" rel="stylesheet">

<!-- Custom CSS -->
{{-- <link href="css_app/app.css" rel="stylesheet"> --}}
<!-- color CSS -->
{{-- <link href="css/colors/blue.css" id="theme" rel="stylesheet"> --}}
<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
</head>

<body>
<!-- Preloader -->
<div class="preloader">
    <div class="cssload-speeding-wheel"></div>
</div>
<section id="wrapper" class="login-register">
    <div class="blur"></div>
    <div class="login-box">
        <div class="white-box">
            <form class="form-horizontal form-material" id="loginform" action="index.html">
                <h3 class="box-title m-b-20">Sign In</h3>
                <div class="form-group ">
                    <div class="col-xs-12">
                        <input class="form-control" name="email" type="email" required="" placeholder="Email">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-xs-12">
                        <input class="form-control" name="password" type="password" required="" placeholder="Password">
                    </div>
                </div>
                {{-- <div class="form-group">
                    <div class="col-md-12">
                        <div class="checskbox checkbox-primary pull-left p-t-0">
                            <input id="checkbox-signup" type="checkbox">
                            <label for="checkbox-signup"> Remember me </label>
                        </div>
                    </div>
                </div> --}}
                <div class="form-group text-center m-t-20">
                    <div class="col-xs-12">
                        <button class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Log In</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                        <div class="social">
                            <a href="javascript:void(0)" class="btn  btn-facebook" data-toggle="tooltip" title="Login with Facebook"> <i aria-hidden="true" class="fa fa-facebook"></i> </a>
                            <a href="javascript:void(0)" class="btn btn-googleplus" data-toggle="tooltip" title="Login with Google"> <i aria-hidden="true" class="fa fa-google-plus"></i> </a>
                        </div>
                    </div>
                </div>
            </form>
            <form class="form-horizontal" id="recoverform" action="index.html">
                <div class="form-group ">
                    <div class="col-xs-12">
                        <h3>Recover Password</h3>
                        <p class="text-muted">Enter your Email and instructions will be sent to you! </p>
                    </div>
                </div>
                <div class="form-group ">
                    <div class="col-xs-12">
                        <input class="form-control" type="text" required="" placeholder="Email">
                    </div>
                </div>
                <div class="form-group text-center m-t-20">
                    <div class="col-xs-12">
                        <button class="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Reset</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>
</body>

@endsection
