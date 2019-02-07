<div class="navbar-default sidebar" role="navigation">
        <div class="sidebar-nav navbar-collapse slimscrollsidebar">
            <ul class="nav" id="side-menu">
                <li class="sidebar-search hidden-sm hidden-md hidden-lg">
                    <div class="input-group custom-search-form">
                        <input type="text" class="form-control" placeholder="Search..."> <span class="input-group-btn">
                        <button class="btn btn-default" type="button"> <i class="fa fa-search"></i> </button>
                        </span> 
                    </div>
                </li>
                <li class="user-pro"> 
                    @guest
                        <li class="nav-item" id="login">
                            {{-- <a class="nav-login" href="{{ route('login') }}"><i class="fas fa-sign-in-alt"></i> <span class="hide-menu">Login</span></a> --}}
                        </li>
                        @else
                            <li class="nav-item" id="login">
                                {{-- <a class="nav-login" href="{{ route('login') }}"><i class="fas fa-sign-in-alt"></i> <span class="hide-menu">Login</span></a> --}}
                            </li>
                        <li class="dropdown">
                            <a class="dropdown-toggle profile-pic" data-toggle="dropdown" href="#"> <img src="../plugins/images/users/varun.jpg" alt="user-img" width="36" class="img-circle"><b class="hidden-xs">{{ Auth::user()->name }} <span class="caret"></span></b> </a>
                            <ul class="dropdown-menu dropdown-user animated flipInY">
                                <li><a href="#"><i class="ti-user"></i> My Profile</a></li>
                                <li><a href="#"><i class="ti-wallet"></i> My Balance</a></li>
                                <li><a href="#"><i class="ti-email"></i> Inbox</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#"><i class="ti-settings"></i> Account Setting</a></li>
                                <li role="separator" class="divider"></li>
                                <li>
                                                <a class="dropdown-item" href="{{ route('logout') }}"
                                                   onclick="event.preventDefault();
                                                                 document.getElementById('logout-form').submit();">
                                                    Logout 1
                                                </a>
            
                                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                                    @csrf
                                                </form>
                                </li>
                            </ul>
                        </li>
                    @endguest
                    <ul id="links"></ul>
                </li>

            </ul>
        </div>
    </div>