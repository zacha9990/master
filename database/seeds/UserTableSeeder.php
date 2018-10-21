<?php
use Illuminate\Database\Seeder;
use App\User;

class UserTableSeeder extends Seeder
{

public function run()
{
    DB::table('users')->delete();
    User::create(array(
        'name'     => 'Zacharia Hendrik',
        'email'    => 'zacha.jubilee@gmail.com',
        'password' => Hash::make('pass12345'),
        'phone'    => '081215663989',
        'gender'   => 'L'
    ));
}

}
