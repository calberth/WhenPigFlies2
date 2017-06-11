

function movePlayer()
{
    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;

    if (cursors.left.isDown) {
            player.body.velocity.x = -150;
            
            if (hasGarlic == false) {
                if (player.body.velocity.y < -1) {
                    if (animL % 10 == 0)
                        player.loadTexture('pigFL1');
                    else if (animL % 5 == 0)
                        player.loadTexture('pigFL2');
                }
                else {//if (hitPlatform) {
                    if (animL % 10 == 0)
                        player.loadTexture('pigL1');
                    else if (animL % 5 == 0)
                        player.loadTexture('pigL2');
                }
            }
            else {
                if (player.body.velocity.y < -1) {
                    if (animL % 10 == 0)
                        player.loadTexture('pigGFL1');
                    else if (animL % 5 == 0)
                        player.loadTexture('pigGFL2');
                }
                else {//if (hitPlatform) {
                    if (animL % 10 == 0)
                        player.loadTexture('pigGL1');
                    else if (animL % 5 == 0)
                        player.loadTexture('pigGL2');
                }
            }
            anim = 10;
            animL++;
            
        }

        else if (cursors.right.isDown) {
            //  Move to the right
            player.body.velocity.x = 150;
            //player.direction = Direction.right;
            
            if (hasGarlic == false) {
                if (player.body.velocity.y < -1) {
                    if (anim % 10 == 0)
                        player.loadTexture('pigFR1');
                    else if (anim % 5 == 0)
                        player.loadTexture('pigFR2');
                }
                else {//if (hitPlatform) {
                    if (anim % 10 == 0)
                        player.loadTexture('pigR1');
                    else if (anim % 5 == 0)
                        player.loadTexture('pigR2');
                }
            }
            else {
                if (player.body.velocity.y < -1) {
                    if (anim % 10 == 0)
                        player.loadTexture('pigGFR1');
                    else if (anim % 5 == 0)
                        player.loadTexture('pigGFR2');
                }
                else {//if (hitPlatform) {
                    if (anim % 10 == 0)
                        player.loadTexture('pigGR1');
                    else if (anim % 5 == 0)
                        player.loadTexture('pigGR2');
                }
            }
            animL = 10;
            anim++;
            
        }

        //  Allow the player to fly!
        if (cursors.up.isDown)
        {
            
            if (stamina > 0)
            {
                player.body.velocity.y += -15;
                stamina -= 0.5;
            }
            //animL++;
            
        }
        else
        {
            if (stamina < 100)
            {
                stamina += 0.25;
            }
        }

        if (cursors.down.isDown) {
            player.body.velocity.y += 10;

        }

}

function checkBattle()
{
    space.onDown.add(dropGarlic, this);
    control.onDown.add(throwGrenade, this);
}

function decreaseHealth(number) {
    health -= number;
    game.camera.flash(0xaa0000, 500);
}