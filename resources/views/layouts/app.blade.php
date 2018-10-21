<!DOCTYPE html>
<html lang="en">

<head>
    <title>Dashboard 1 | Rare admin</title>

    <meta charset="UTF-8">
    <meta content='width=device-width, initial-scale=1, maximum-scale=1' name='viewport'>
    <link rel="shortcut icon" href="img/logo2.html" />
    <!--start global css-->
    <link type="text/css" rel="stylesheet" href="css/app.css" />
    <!-- end of global css -->
    <link type="text/css" rel="stylesheet" href="css/custom.css" />

    <link rel="stylesheet" href="vendors/slimmenu/css/slimmenu.min.css">
    <link type="text/css" rel="stylesheet" href="css/pages/horizontal.css">

    <link type="text/css" rel="stylesheet" href="vendors/c3/css/c3.min.css" />
    <link type="text/css" rel="stylesheet" href="css/pages/index1.css" />

     @yield('pageCss')


</head>

<body>
    <header class="header">
        <nav class="navbar navbar-static-top">
            <div>
                <a href="index2.html" class="logo navbar-brand float-left text-white text-center">
                    <img src="img/logo.png" alt="logo" class="img-fluid navbar_brand_img" />
                </a>
                <div class="top_right_nav">
                    <div class="float-right">
                        <!--start admin setting section-->
                        <div class="dropdown">
                            <a id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="img/admin.jpg" class="admin_img2 img-fluid rounded-circle avatar-img" alt="avatar">

                            </a>
                            <div class="dropdown-menu admin_setting_dropdown" aria-labelledby="dropdownMenuButton">
                                <div>
                                    <div class="admin_image_section">
                                        <img src="img/admin.jpg" class="admin_image img-fluid rounded-circle avatar-img"
                                            alt="avatar">
                                        <h5 class="text-white p-b-30">John Doe</h5>
                                    </div>
                                    <p></p>
                                    <div>
                                        <div class="admin_social_icon">
                                            <div class="admin_fb float-left mb-1"><i class="ti-facebook text-white"></i>
                                            </div>
                                            <div class="admin_twitter float-left mb-1"><i class="ti-twitter-alt text-white"></i></div>
                                            <div class="admin_google float-left mb-1"><i class="ti-google text-white"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clear_both">
                                        <div class="admin_item"><i class="ti-user"> </i> My Profile</div>
                                        <div class="admin_item"><i class="ti-settings"> </i> Account Settings</div>
                                    </div>
                                    <div class="admin_account">
                                        <div class="float-left"><a href="#"><i class="ti-lock"> </i> Lock</a></div>
                                        <div class="float-right">
                                            <a class="dropdown-item" href="{{ route('logout') }}"
                                            onclick="event.preventDefault();
                                                            document.getElementById('logout-form').submit();">
                                                {{ __('Logout') }}
                                            </a>

                                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                                @csrf
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--end admin setting section-->
                    </div>
                    <div class="messages float-right">
                        <!--start admin setting section-->
                        <div class="dropdown">
                            <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="ti-email text-white"></i>
                                <div class="messages_badge_top">
                                    <span class="badge badge-warning">3</span>
                                </div>
                            </a>
                            <div class="dropdown-menu messages_content" aria-labelledby="dropdownMenuButton">
                                <div class="msg_title">
                                    <p class="text-center text-info">3 New Messages</p>
                                </div>
                                <div class="msg_item">
                                    <div class="row">
                                        <div class="col-3">
                                            <img src="img/people2.png" class="rounded-circle" alt="avatar">
                                            <span class="text-sm">5:50pm</span>
                                        </div>
                                        <div class="col-9">
                                            <span class="text-info">Brett K. Bennett</span>
                                            <br />
                                            <span class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit.</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="msg_item">
                                    <div class="row">
                                        <div class="col-3">
                                            <img src="img/people5.png" class="rounded-circle" alt="avatar">
                                            <span class="text-sm">4:45pm</span>
                                        </div>
                                        <div class="col-9">
                                            <span class="text-info">Donald G. Oehler</span>
                                            <br />
                                            <span class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit.</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="msg_item">
                                    <div class="row">
                                        <div class="col-3">
                                            <img src="img/people3.png" class="rounded-circle" alt="avatar">
                                            <span class="text-sm">3:30pm</span>
                                        </div>
                                        <div class="col-9">
                                            <span class="text-info">Teena F. Larimore</span>
                                            <br />
                                            <span class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit.</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="msg_footer">
                                    <p class="text-center text-white"><a href="#">Show All Messages</a></p>
                                </div>
                            </div>
                        </div>
                        <!--end admin setting section-->
                    </div>
                    <div class="notifications float-right">
                        <!--start admin setting section-->
                        <div class="dropdown">
                            <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="ti-bell text-white"></i>
                                <div class="notifications_badge_top">
                                    <span class="badge badge-danger">4</span>
                                </div>
                            </a>
                            <div class="dropdown-menu notifications_content" aria-labelledby="dropdownMenuButton">
                                <div class="noti_title">
                                    <p class="text-center text-info">4 New Notifications</p>
                                </div>
                                <div class="noti_item">
                                    <div class="row">
                                        <div class="col-3">
                                            <p></p>
                                            <i class="ti-email text-info noti_msg"></i>
                                        </div>
                                        <div class="col-9">
                                            <span>New message from john.</span>
                                            <br />
                                            <span class="text-sm">jan 29th 2017</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="noti_item">
                                    <div class="row">
                                        <div class="col-3">
                                            <p></p>
                                            <i class="ti-user text-info noti_msg"></i>
                                        </div>
                                        <div class="col-9">
                                            <span>Friend request from Teena.</span>
                                            <br />
                                            <span class="text-sm">jan 20th 2017</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="noti_item">
                                    <div class="row">
                                        <div class="col-3">
                                            <p></p>
                                            <i class="ti-gift text-info noti_msg"></i>
                                        </div>
                                        <div class="col-9">
                                            <span>Today Mahesh birthday.</span>
                                            <br />
                                            <span class="text-sm">jan 9th 2017</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="noti_item">
                                    <div class="row">
                                        <div class="col-3">
                                            <p></p>
                                            <i class="ti-heart text-info noti_msg"></i>
                                        </div>
                                        <div class="col-9">
                                            <span>Bannett like your comment.</span>
                                            <br />
                                            <span class="text-sm">jan 1st 2017</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="noti_footer">
                                    <p class="text-center text-white"><a href="#">Show All Notifications</a></p>
                                </div>
                            </div>
                        </div>
                        <!--end admin setting section-->
                    </div>
                    <div class="fullscreen float-right hidden-xs-down">
                        <i class="ti-fullscreen text-white full_screen"></i>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <div class="horizontal_menu">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <ul id="navigation" class="slimmenu">
                        <li class="main-menu">
                            <a href="{{route('home')}}" class="menu-list  active">
                                <span class="ti-home font_18 text-primary"> </span> Dashboard
                            </a>                            
                        </li>
                        <li class="main-menu">
                            <a href="" class="menu-list">
                                <span class="ti-settings font_18 text-primary"> </span> Setting
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!--End header-->
    <div class="wrapper hide_menu">
        <div class="right-aside view-port-height">





            <div class="content-header container-fluid bg-white">
                <div class="row">
                    <div class="col-sm-4">
                        <h4><i class='ti-home'> </i> Dashboard 1 </h4>
                    </div>
                    <div class="col-6 col-sm-4 offset-md-2 col-md-3 offset-xl-4 col-xl-2 header_left_xs_up pt-2">
                        <div class="row">
                            <div class="col-6">
                                <span>Users</span><br />
                                <span>250 <i class="ti-angle-up text-primary"> </i></span>
                            </div>
                            <div class="col-6">
                                <div class="sparkline_users"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3 col-xl-2 header_left pt-2">
                        <div class="row">
                            <div class="col-6">
                                <span>Sales</span><br />
                                <span>150 <i class="ti-angle-up text-danger"> </i></span>
                            </div>
                            <div class="col-6">
                                <div class="sparkline_sales"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <!-- Main content -->
            <div class="content">
                @yield('content')
            </div>
            
            

        </div>
    </div>

    <footer>
        <div class="bg-white container-fluid">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="footer_content"> Copyright ©2017 made by jyostna</div>
                </div>
            </div>
        </div>

    </footer>
    <script type="text/javascript" src="js/app.js"></script>
    <!--end global js -->
    <script type="text/javascript" src="js/custom.js"></script>

    <script src="vendors/slimmenu/js/jquery.slimmenu.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/pages/horizontal.js"></script>

    <script type="text/javascript" src="js/pluginjs/sparkline.js"></script>
    <script type="text/javascript" src="vendors/d3/js/d3.min.js"></script>
    <script type="text/javascript" src="vendors/c3/js/c3.min.js"></script>
    <script type="text/javascript" src="js/pages/index1.js"></script>

     @yield('pageScript')

</html>
