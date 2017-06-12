

function movePlayer()
{
    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;

    if (cursors.left.isDown) {
            player.body.velocity.x = -150;
            
            //if (player.body.velocity.y < -1) {
                //flyLeft(hasGarlic);
            //}
            if (cursors.up.isDown)
            {
                if (stamina > 0)
                {
                    player.body.velocity.y += -15;
                    stamina -= 0.5;
                }
                flyLeft(hasGarlic);
                //game.physics.arcade.collide(player, platforms);
            }
            else { //if (hitPlatform) {
                //if (player.body.position.y < 500) {
                if (game.physics.arcade.collide(player, platforms)) {   
                    //flyLeft(hasGarlic);
                    walkLeft(hasGarlic);
                }
                else {
                    //walkLeft(hasGarlic);
                    //flyLeft(hasGarlic);
                    if (hasGarlic)
                    {
                        player.loadTexture('pigGFL1');
                    }
                    else
                    {
                        player.loadTexture('pigFL1');
                    }
                }
            }
            anim = 10;
            animL++;

            
    }

    else if (cursors.right.isDown) {
            //  Move to the right
            player.body.velocity.x = 150;
            //player.direction = Direction.right;
            
            //if (player.body.velocity.y < -1) {
                //flyRight(hasGarlic);
            //}
            if (cursors.up.isDown)
            {
                if (stamina > 0)
                {
                    player.body.velocity.y += -15;
                    stamina -= 0.5;
                }
                flyRight(hasGarlic);
                //game.physics.arcade.collide(player, platforms);
            }
            else { //if (hitPlatform) {
                //if (player.body.position.y < 500) {
                if (game.physics.arcade.collide(player, platforms)) {   
                    //flyRight(hasGarlic);
                    walkRight(hasGarlic);
                }
                else {
                    if (hasGarlic)
                    {
                        player.loadTexture('pigGFR1');
                    }
                    else
                    {
                        player.loadTexture('pigFR1');
                    }
                    //walkRight(hasGarlic);
                    //flyRight(hasGarlic);

                }
            }
            animL = 10;
            anim++;
            
    }

        //  Allow the player to fly!
    if (cursors.up.isDown && !cursors.right.isDown && !cursors.left.isDown)
    {
            
            if (stamina > 0)
            {
                player.body.velocity.y += -15;
                stamina -= 0.5;
            }
            if (facing == ("left")) {
                flyLeft(hasGarlic);
                animL++; 
                anim = 10;
            }
            else if (facing == ("right")) {
                flyRight(hasGarlic);
                anim++;
                animL = 10;
            }    
    }
    
    else
    {
            //if (stamina < 100)
            if (stamina < 97.75)
            {
                stamina += 0.25;
            }
    }

    if (cursors.down.isDown) {
            player.body.velocity.y += 10;

    }

}

function walkRight(wearingGarlic) {
    facing = "right";
    if (wearingGarlic) {
        if (anim % 10 == 0)
            player.loadTexture('pigGR1');
        else if (anim % 5 == 0)
            player.loadTexture('pigGR2');
    }
    else {
        if (anim % 10 == 0)
            player.loadTexture('pigR1');
        else if (anim % 5 == 0)
            player.loadTexture('pigR2');
    }
}

function flyRight(wearingGarlic) {
    facing = "right";
    if (wearingGarlic) {
        if (anim % 10 == 0)
            player.loadTexture('pigGFR1');
        else if (anim % 5 == 0)
            player.loadTexture('pigGFR2');
    }
    else {
        if (anim % 10 == 0)
            player.loadTexture('pigFR1');
        else if (anim % 5 == 0)
            player.loadTexture('pigFR2');
    }
}

function walkLeft(wearingGarlic) {
    facing = "left";
    if (wearingGarlic) {
        if (animL % 10 == 0)
            player.loadTexture('pigGL1');
        else if (animL % 5 == 0)
            player.loadTexture('pigGL2');
    }
    else {
        if (animL % 10 == 0)
            player.loadTexture('pigL1');
        else if (animL % 5 == 0)
            player.loadTexture('pigL2');
    }
}

function flyLeft(wearingGarlic) {
    facing = "left";
    if (wearingGarlic) {
        if (animL % 10 == 0)
            player.loadTexture('pigGFL1');
        else if (animL % 5 == 0)
            player.loadTexture('pigGFL2');
    }
    else {
        if (animL % 10 == 0)
            player.loadTexture('pigFL1');
        else if (animL % 5 == 0)
            player.loadTexture('pigFL2');
    }
}

function checkBattle()
{
    if (hasGarlic)
    {
        space.onDown.add(dropGarlic, this);
        control.onDown.add(throwGrenade, this);
    }
}

function decreaseHealth(number) {
    health -= number;
    game.camera.flash(0xaa0000, 500);
}
