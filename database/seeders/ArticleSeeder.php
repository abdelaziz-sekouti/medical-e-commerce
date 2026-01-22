<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ArticleSeeder extends Seeder
{
    public function run(): void
    {
        $articles = [
            [
                'title' => 'The Benefits of Tele-health in Modern Medicine',
                'content' => 'Tele-health has revolutionized how patients access care. It provides convenience, reduces travel time, and ensures that even those in remote areas can see a doctor.',
                'meta_title' => 'Benefits of Tele-health | Online Consultations',
                'meta_description' => 'Discover how tele-health is changing the healthcare landscape and providing easier access to medical professionals.',
                'is_published' => true,
            ],
            [
                'title' => '5 Tips for Preventive Healthcare',
                'content' => 'Preventive healthcare is key to a long, healthy life. Regular checkups, a balanced diet, and exercise are essential components.',
                'meta_title' => 'Preventive Healthcare Tips | Stay Healthy',
                'meta_description' => 'Learn the top 5 tips for preventive healthcare and how to avoid chronical illnesses through lifestyle changes.',
                'is_published' => true,
            ],
            [
                'title' => 'Understanding Medical Consultations Online',
                'content' => 'Online consultations are a great way to get medical advice quickly. Here is what you need to know before your first video call with a doctor.',
                'meta_title' => 'Online Medical Consultations Guide',
                'meta_description' => 'A complete guide to preparing for and making the most of your online medical consultation.',
                'is_published' => true,
            ],
        ];

        foreach ($articles as $article) {
            Article::create(array_merge($article, [
                'slug' => Str::slug($article['title']),
            ]));
        }
    }
}
