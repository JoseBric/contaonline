import React from "react";
import renderHTML from 'react-render-html';
import "./login.css";

function Login() {
    return(
        <div className="container d-flex justify-content-center align-content-center">
            <div id="loginBox" className="white-box col-md-6">
                <form method="POST" className="form-horizontal form-material" id="loginform" action="/login">
                    <h3 className="box-title m-b-20">Sign In</h3>
                    <input type="hidden" name="_token" id="csrf-token" value={window.token} />
                    <div className="form-group ">
                        <div className="col-xs-12">
                            <input className="form-control" name="email" type="email" required placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-12">
                            <input className="form-control" name="password" type="password" required placeholder="Password" />
                        </div>
                    </div>
                    {/* <div className="form-group">
                        <div className="col-md-12">
                            <div className="checkbox checkbox-primary pull-left p-t-0">
                                <input id="checkbox-signup" type="checkbox" />
                                <label htmlFor="checkbox-signup"> Remember me </label>
                            </div>
                            <a href="javascript:void(0)" id="to-recover" className="text-dark pull-right"><i className="fa fa-lock m-r-5"></i> Forgot pwd?</a> </div>
                    </div> */}
                    <div className="form-group text-center m-t-20">
                        <div className="col-xs-12">
                            <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Log In</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                            <div className="social">
                                <a href="javascript:void(0)" className="btn  btn-facebook" data-toggle="tooltip" title="Login with Facebook"> <i aria-hidden="true" className="fa fa-facebook"></i> </a>
                                <a href="/auth/google" className="btn btn-googleplus" data-toggle="tooltip" title="Login with Google"> <i aria-hidden="true" className="fa fa-google-plus"></i> </a>
                            </div>
                        </div>
                    </div>
                    <div className="form-group m-b-0">
                        <div className="col-sm-12 text-center">
                            <p>Don't have an account? <a href="register.html" className="text-primary m-l-5"><b>Sign Up</b></a></p>
                        </div>
                    </div>
                </form>
                <form className="form-horizontal" id="recoverform" action="index.html">
                    <div className="form-group ">
                        <div className="col-xs-12">
                            <h3>Recover Password</h3>
                            <p className="text-muted">Enter your Email and instructions will be sent to you! </p>
                        </div>
                    </div>
                    <div className="form-group ">
                        <div className="col-xs-12">
                            <input className="form-control" type="text" required="" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group text-center m-t-20">
                        <div className="col-xs-12">
                            <button className="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login