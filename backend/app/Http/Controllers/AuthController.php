<?php

namespace App\Http\Controllers;

use App\Role;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request) {
        $request->validate([
            'email' => 'required|email|exists:users,email',
            'password' => 'required'
        ]);

        if (Auth::attempt($request->only(['email', 'password']))) {
            $user = Auth::user();
            $userRole = $user->role()->first();

            if ($userRole) {
                $this->scope = $userRole->role;
            }

            $token = $user->createToken($user->email.'-'.now(), [$this->scope]);

            return response()->json([
                'token' => $token->accessToken
            ], 200);
        }
    }

    public function register(Request $request) {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'password_confirmation' => 'required'
        ]);

        $user = new User([
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        $user->save();

        $user->role()->save(new Role(['role' => 'USER']));

        return response()->json([
            'message' => 'Success'
        ], 201);
    }

    public function test(Request $request) {
        return response()->json([
            "message" => "Success"
        ]);
    }
}
