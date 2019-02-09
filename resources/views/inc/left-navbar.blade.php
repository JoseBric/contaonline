
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
                                    {{ Auth::user()->name }} {{ Auth::user()->lastname }}<span class="fa arrow"></span>
                                </span>
                            </a>
                            <ul class="dropdown-menu nav nav-second-level" id="user-links">

                                <li><a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();"><i class="fa fa-power-off"></i>
                                    Logout </a>
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </li>
                            </ul>
                        </li>
                        <ul class="nav" id="nav-links">
                        </ul>
                    </ul>
                </div>
            </div>
            <!-- Left navbar-header end -->
            <!-- Page Content -->
            </div>
            <!-- /#page-wrapper -->
        </div>
        <!-- /#wrapper -->