<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
        'services' => \App\Models\Service::all(),
        'articles' => \App\Models\Article::where('is_published', true)->latest()->take(3)->get(),
    ]);
})->name('home');

Route::get('/blog', function () {
    return Inertia::render('blog/index', [
        'articles' => \App\Models\Article::where('is_published', true)->latest()->get(),
    ]);
})->name('blog.index');

Route::get('/blog/{article:slug}', function (\App\Models\Article $article) {
    return Inertia::render('blog/show', [
        'article' => $article,
    ]);
})->name('blog.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
