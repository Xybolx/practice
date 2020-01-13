<?php

namespace Tests\Feature;

use App\Hater;
use App\User;
use Tests\TestCase;

class HaterModelTest extends TestCase
{
    /** @test */
    public function it_can_be_mass_assigned_a_user_id()
    {
        $userId = factory(User::class)->create()->id;

        $hater = new Hater(['user_id' => $userId]);

        $this->assertEquals($userId, $hater->user_id);
    }
    
}
