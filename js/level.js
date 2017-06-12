locked = false;
lockedTo = null;

function levelUpdate() {
    checkCollisions();
    movePlayer();
    checkBattle();
    updateHealthBar(health);
    updateStaminaBar(stamina);
    checkLose();

    if (apples.children.length > 0)
        checkAppleCollisions();

    if (soundwaves.children.length > 0)
        checkSoundwaves();
    //if (blasts.children.length > 0)
        updateBlastAnim();
    if (sittingGrenades.children.length > 0)
        checkSittingGrenades();
}

function initializeLevel(left, right, up, down, bottomDeath)
{

    background = game.add.group();

    platforms = game.add.group();
    platforms.enableBody = true;

    boundaries = game.add.group();
    boundaries.enableBody = true;

    blasts = game.add.group();
    blasts.enableBody = true;

    apples = game.add.group();
    apples.enableBody = true;

    sittingGrenades = game.add.group();
    sittingGrenades.enableBody = true;

      

    if (left)
    {
        leftBound = boundaries.create(-5, 0, 'levelBound');
        leftBound.scale.setTo(1,5);
        leftBound.visible = false;
    }

    if (right)
    {
        rightBound = boundaries.create(1199, 0, 'levelBound');
        rightBound.scale.setTo(1,5); 
        rightBound.visible = false;
        rightBound.body.immovable = true;
    }

    if (up)
    {
        upperBound = boundaries.create(0, -5, 'upBound');
        upperBound.scale.setTo(9,1);
        upperBound.visible = false;
        upperBound.body.immovable = true;
    }

    if (down)
    {
        lowerBound = boundaries.create(0, 674, 'upBound');
        lowerBound.scale.setTo(9,1);
        lowerBound.visible = false;
        lowerBound.body.immovable = true;
    }

    if (bottomDeath)
    {
        deathBound = boundaries.create(0, 674, 'upBound');
        deathBound.scale.setTo(9,1);
        deathBound.visible = false;
        deathBound.body.immovable = true;
    }
    

    bats = game.add.group();
    bats.enableBody = true;
    diveBatsInit();

    soundwaves = game.add.group();
    soundwaves.enableBody = true;

    cursors = game.input.keyboard.createCursorKeys();
    space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    control = game.input.keyboard.addKey(Phaser.Keyboard.CONTROL);

    garlics = game.add.group();
    garlics.enableBody = true;

    grenades = game.add.group();
    grenades.enableBody = true;

    createHealthBar(health);
    createStaminaBar(health);
    createGarlicGrenadesBar();

    player = game.add.sprite(positionx, positiony, texture);

    game.physics.arcade.enable(player);
    //player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;
    explosion = game.add.audio('explosion');
}


function checkCollisions()
{
    //  Collide the player and the platforms
    //var hitPlatform = game.physics.arcade.collide(player, platforms);
    //if (!cursors.up.isDown && !cursors.right.isDown && !cursors.left.isDown && !cursors.down.isDown)
    if (!cursors.up.isDown && !cursors.right.isDown && !cursors.left.isDown)
    //if (!cursors.right.isDown && !cursors.left.isDown && !cursors.down.isDown)
    {
        var onGround = game.physics.arcade.collide(player, platforms);
        if (onGround)
        {
            if (hasGarlic)
            {
                if (facing == "right")
                {
                    player.loadTexture('pigGR1');
                }
                else
                {
                    player.loadTexture('pigGL1');
                }
            }
            else
            {
                if (facing == "right")
                {
                    player.loadTexture('pigR1');
                }
                else
                {
                    player.loadTexture('pigL1');
                }
            }
        }
    }
    
    //game.physics.arcade.overlap(player, platforms, customSep, null, this);

    // checks garlic collision with enemies
    game.physics.arcade.collide(garlics, bats, collectBat, null, this);
    game.physics.arcade.collide(garlics, diveBats, killDBat, null, this);

    // checks soundwave collision with player
    game.physics.arcade.collide(player, soundwaves, hitWave, null, this);
    game.physics.arcade.collide(player, bats, hitEnemy, null, this);

    game.physics.arcade.collide(player, diveBats, hitEnemy, null, this); //Divebat and bat are difference groups
    

    // check boundaries and advance player if necessary
    game.physics.arcade.collide(player, rightBound, nextScreen);
    game.physics.arcade.collide(player, leftBound, previousScreen);
    game.physics.arcade.collide(player, upperBound, upScreen);
    game.physics.arcade.collide(player, lowerBound, downScreen);
    game.physics.arcade.collide(player, deathBound, fallingDeathScreen);

    game.physics.arcade.collide(player, lightning, hitWave, null, this);

    updateGGBar();
    game.physics.arcade.collide(grenades, bats, explode, null, this);
    game.physics.arcade.collide(grenades, diveBats, explode, null, this);

    game.physics.arcade.collide(rightBound, garlics, killGarlic, null, this);
    game.physics.arcade.collide(leftBound, garlics, killGarlic, null, this);
    game.physics.arcade.collide(lowerBound, garlics, killGarlic, null, this);
    //game.physics.arcade.collide(upperBound, garlics, killGarlic, null, this);
    game.physics.arcade.collide(platforms, garlics, killGarlic, null, this);

}

function checkLose()
{
    if (health <= 0)
    {
        Lose();
    }
}

function Lose()
{
    game.state.start('lose');
}

function nextScreen()
{
    positionx = 32;
    positiony = player.world.y;
    texture = player.texture;
    state++;
    game.state.start('frame'+ state); 
}

function previousScreen()
{
    positionx = 1100;
    positiony = player.position.y;
    texture = player.texture;
    state--;
    game.state.start('frame'+ state); 
}

function upScreen()
{
    positionx = player.position.x;
    positiony = 575;
    texture = player.texture;
    if (state == 2)
    {
        if (hasGarlic)
        {
            state = 5;
            game.state.start('frame5'); 
        }
        
    }
    else
    {
        state++;
        game.state.start('frame'+state);
    }
}

function downScreen()
{
    positionx = player.position.x;
    positiony = 50;

    texture = player.texture;
    if (state == 5)
    {
        state = 2;
        game.state.start('frame2'); 
    }
    else
    {
        state--;
        game.state.start('frame'+state);
    }
}

function fallingDeathScreen()
{
    game.state.start('fallScene');
}

function collectBat(garlics, bat)
{
    bat.kill();
    bats.remove(bat);
}

function hitWave(player, wave) {
    wave.kill();
    hitEnemy(player, wave);
}


function hitEnemy(player, enemy) {
    decreaseHealth(5);
}

