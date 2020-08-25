<?php

use App\Role;
use App\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $role = new Role([
            'role' => 'ADMIN'
        ]);

        $user = new User([
            'email' => 'admin@m.tj',
            'password' => bcrypt('administrator')
        ]);

        $user->save();
        $user->role()->save($role);
    }
}
