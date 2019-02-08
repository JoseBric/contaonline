
        <!-- End Top Navigation -->
        <!-- Left navbar-header -->
        <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse slimscrollsidebar">
                    <ul class="nav" id="side-menu">
                        <li class="sidebar-search hidden-sm hidden-md hidden-lg">
                            <!-- input-group -->
                            <div class="input-group custom-search-form">
                                <input type="text" class="form-control" placeholder="Search..."> <span class="input-group-btn">
                <button class="btn btn-default" type="button"> <i class="fa fa-search"></i> </button>
                </span> </div>
                            <!-- /input-group -->
                        </li>
                        <li class="user-pro">
                            <a data-toggle="dropdown" class="dropdown has-arrow waves-effect">
                                {{-- <img src="../plugins/images/users/varun.jpg" alt="user-img" class="img-circle"> --}} 
                                <span class="hide-menu"> 
                                    Steve Gection<span class="fa arrow"></span>
                                </span>
                            </a>
                            <ul class="dropdown-menu nav nav-second-level">
                                <li><a class="dropdown-item"><i class="ti-user"></i> My Profile</a></li>
                                <li><a class="dropdown-item"><i class="ti-wallet"></i> My Balance</a></li>
                                <li><a class="dropdown-item"><i class="ti-email"></i> Inbox</a></li>
                                <li><a class="dropdown-item"><i class="ti-settings"></i> Account Setting</a></li>
                                <li><a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();"><i class="fa fa-power-off"></i>
                                    Logout </a>
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                    
                                </li>
                            </ul>
                        </li>

                        <li class="nav-small-cap m-t-10">--- Menu Principal</li>

                        <li class="dropdown"> 
                            <a data-toggle="dropdown" class="waves-effect"><i class="linea-icon linea-basic fa-fw" data-icon="v"></i> <span class="hide-menu"> Dashboard <span class="fa arrow"></span> <span class="label label-rouded label-custom pull-right">4</span></span></a>
                            <ul class="dropdown-menu">
                                <li> <a class="dropdown-item" href="index.html">Demographical</a> </li>
                                <li> <a class="dropdown-item" href="index2.html">Minimalistic</a> </li>
                                <li> <a class="dropdown-item" href="index3.html">Analitical</a> </li>
                                <li> <a class="dropdown-item" href="index4.html">Simpler</a> </li>
                            </ul>
                        </li>
                        <li><a href="documentation.html" class="waves-effect"><i class="fa fa-circle-o text-danger"></i> <span class="hide-menu">Documentation</span></a></li>
                        <li><a href="gallery.html" class="waves-effect"><i class="fa fa-circle-o text-info"></i> <span class="hide-menu">Gallery</span></a></li>
                        <li><a href="faq.html" class="waves-effect"><i class="fa fa-circle-o text-success"></i> <span class="hide-menu">Faqs</span></a></li>
                    </ul>
                </div>
            </div>
            <!-- Left navbar-header end -->
            <!-- Page Content -->
                <footer class="footer text-center"> 2017 &copy; Elite Admin brought to you by themedesigner.in </footer>
            </div>
            <!-- /#page-wrapper -->
        </div>
        <!-- /#wrapper -->