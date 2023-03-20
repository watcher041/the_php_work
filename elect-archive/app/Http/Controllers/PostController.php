<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Providers\RouteServiceProvider;

class PostController extends Controller
{
    public function store(Request $request){

        $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string|max:255',
        ]);

        $post = Post::create([
            'title' => $request->title,
            'body' => $request->body,
        ]);

        return redirect(RouteServiceProvider::HOME);
    }
}
