<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Socialite;
use App\User;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{

    use AuthenticatesUsers;

    protected $redirectTo = '/';

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request) {
        $request->validate([
            "email" => "required|max:50",
            "password" => "required|min:6",
        ]);
        $user = User::where("email", $request->input("email"))->first();
        if($user) {
            if(Hash::check($request->input("password"), $user->password)) {
                \Auth::login($user);
                return redirect("/")->withSuccess("Has entrado a tu cuenta");
            }
        }
        return redirect("/login")->withDanger("Los campos no coinciden o el email no existe");
    }

    public function redirectToProvider()
    {
        return Socialite::driver("google")->redirect();
    }
    
    public function handleProviderCallback()
    {
        $user = Socialite::driver('google')->stateless()->user();
        if($authUser = $this->userExists($user)) {
            \Auth::login($authUser);
            return redirect($this->redirectTo)->withSuccess("Has entrado a tu cuenta");
        } else {
            return redirect($this->redirectTo)->withWarning("Tu cuenta de usuario no está registrada");
        }

    }

    private function userExists($user) {
        $authUser = User::where("email", $user->email)->first();
        if($authUser) {
            return $authUser;
        } else {
            return false;
        }
    }
}
