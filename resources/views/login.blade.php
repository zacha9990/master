<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from demo.rareadmin.rocks/horizontal/login.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 12 Oct 2018 04:10:36 GMT -->
<head>
    <title>Login | Master Admin</title>

    <meta charset="UTF-8">
    <meta content='width=device-width, initial-scale=1, maximum-scale=1' name='viewport'>
    <link rel="shortcut icon" href="img/logo2.html"/>
    <!--start global css-->
    <link type="text/css" rel="stylesheet" href="css/app.css" />
    <!-- end of global css -->
    <link type="text/css" rel="stylesheet" href="css/custom.css" />


<link rel="stylesheet" href="vendors/bootstrapvalidator/css/bootstrapValidator.min.css">
<link type="text/css" rel="stylesheet" href="css/pages/login.css" />

</head>


<body class="login_screen">


<div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
            <div class="login_box p-3">
                <div class="row m-t-20">
                    <div class="col-lg-12 text-center">
                        <img src="img/logo.png" class="img-fluid" alt="logo" />
                        <h5 class="text-white m-t-20">Login</h5></div>
                </div>

                 @if(\Session::has('alert'))
                    <div class="alert alert-danger">
                        <div>{{Session::get('alert')}}</div>
                    </div>
                @endif
                @if(\Session::has('alert-success'))
                    <div class="alert alert-success">
                        <div>{{Session::get('alert-success')}}</div>
                    </div>
                @endif

                <div class="m-t-15">
                    <form action="{{url('login')}}" id="tryitForm" method="post" autocomplete="off">
                    {{ csrf_field() }}
                        <div class="form-group ">
                            <div class="input-group ">
                            <span class="input-group-addon">
                                <i class="ti-user"></i>
                            </span>
                                <input type="email" name="email" class="form-control {{ $errors->has('email') ? ' is-invalid' : '' }}" id="email" placeholder="Email Address" required>
                               
                            </div>
                             @if ($errors->has('email'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                            @endif
                        </div>
                        <div class="form-group ">
                            <div class="input-group m-t-15">
                            <span class="input-group-addon">
                                <i class="ti-lock"></i>
                            </span>
                                <input type="password" name="password" class="form-control {{ $errors->has('password') ? ' is-invalid' : '' }}" id="password" placeholder="Password"  required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="row m-t-15">
                            <div class="col-12">
                                <label class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input form-control" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                    <span class="custom-control-indicator"></span>
                                    <a class="custom-control-description text-white">{{ __('Remember Me') }}</a>
                                </label>
                            </div>
                        </div>
                        <div class="text-center login_bottom">
                            <button type="submit" class="btn btn-success btn-block b_r_20 m-t-10 m-r-20">LOG IN</button>
                        </div>
                        <div class="row">
                            <div class="col-7 m-t-15 ">
                                <a href="{{ route('password.request') }}" class="text-white">Forgot password ?</a>
                            </div>
                            <div class="col-5 m-t-15 text-right">
                                <a href="register.html" class="forgottxt_clr text-white"><i class="fa fa-external-link"></i> Sign up</a>
                            </div>

                        </div>

                    </form>
                </div>

                <div class="row">
                    <div class="text-center col-lg-12 m-t    border-left:0;-20">
                        <h5 class="text-white">--Or--</h5>
                    </div>
                    <div class="col-lg-12 text-center mb-3">
                        <a href="#" class="btn login_fb btn-block">Sign in with <i class="ti-facebook"></i></a>
                        <a href="#" class="btn login_google btn-block">Sign in with <i class="ti-google"></i></a>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/tether.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>


<script type="text/javascript" src="vendors/bootstrapvalidator/js/bootstrapValidator.min.js"></script>
<script type="text/javascript" src="vendors/jasny-bootstrap/js/inputmask.js"></script>
<script type="text/javascript" src="js/pages/login.js"></script>

</html>