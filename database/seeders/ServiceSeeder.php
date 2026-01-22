<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            [
                'title' => 'General Medical Consultation',
                'description' => 'Connect with a general practitioner for non-emergency medical advice, prescriptions, and referrals.',
                'price' => 200.00,
                'duration' => '20 min',
                'service_type' => 'Video Call',
            ],
            [
                'title' => 'Preventive Health Checkup',
                'description' => 'A comprehensive review of your health status, including lifestyle advice and screening recommendations.',
                'price' => 350.00,
                'duration' => '45 min',
                'service_type' => 'Clinic Visit',
            ],
            [
                'title' => 'Specialist Second Opinion',
                'description' => 'Get a second opinion from a board-certified specialist on your diagnosis or treatment plan.',
                'price' => 500.00,
                'duration' => '30 min',
                'service_type' => 'Video Call',
            ],
            [
                'title' => 'Home Nursing Care',
                'description' => 'Professional nursing services provided in the comfort of your home, including wound care and injections.',
                'price' => 300.00,
                'duration' => '60 min',
                'service_type' => 'Home Care',
            ],
        ];

        foreach ($services as $service) {
            Service::create(array_merge($service, [
                'slug' => Str::slug($service['title']),
            ]));
        }
    }
}
