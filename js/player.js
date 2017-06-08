

function movePlayer()
{
    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;

    if (cursors.left.isDown) {
            player.body.velocity.x = -150;

            //player.direction = Direction.left;
            
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
            anim = 10;
            animL++;
            
        }

        else if (cursors.right.isDown) {
            //  Move to the right
            player.body.velocity.x = 150;
            //player.direction = Direction.right;
            

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
            animL = 10;
            anim++;
            
        }

        //  Allow the player to fly!
        if (cursors.up.isDown)
        {
            
            if (stamina > 0)
            {
                player.body.velocity.y += -10;
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
    if (space.isDown)
    {
        if (garlicTime % 20 == 0) //change these mechanics
            dropGarlic();
        garlicTime++;
    }
}