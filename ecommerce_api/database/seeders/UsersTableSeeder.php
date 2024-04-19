<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create admin user
        User::create([
            'name' => 'Admin',
            'email' => 'admin@ecommerce.com',
            'password' => bcrypt('password'), 
            'is_admin' => 1, 
        ]);

        // Create normal user
        User::create([
            'name' => 'Test User',
            'email' => 'test@ecommerce.com',
            'password' => bcrypt('password'), 
            'is_admin' => 0, 
        ]);
    }
}
