
function initializeLevel(left, right, up)
{
    background = game.add.group();

    platforms = game.add.group();
    platforms.enableBody = true;

    boundaries = game.add.group();
    boundaries.enableBody = true;
    if (left)
    {
        leftBound = boundaries.create(-5, 0, 'levelBound');
        leftBound.scale.setTo(1,5);
    }

    if (right)
    {
        rightBound = boundaries.create(1199, 0, 'levelBound');
        rightBound.scale.setTo(1,5); 
    }

    if (up)
    {
        upperBound = boundaries.create(0, -5, 'upBound');
        upperBound.scale.setTo(9,1);
    }
    

    bats = game.add.group();
    bats.enableBody = true;

    soundwaves = game.add.group();
    soundwaves.enableBody = true;

    cursors = game.input.keyboard.createCursorKeys();
    space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    garlics = game.add.group();

    createHealthBar(health);
    createStaminaBar(health);

    player = game.add.sprite(positionx, positiony, texture);

    game.physics.arcade.enable(player);
    //player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;
}


function checkCollisions()
{
    //  Collide the player and the platforms
    var hitPlatform = game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(platforms);

    // checks garlic collision with enemies
    game.physics.arcade.overlap(garlics, bats, collectBat, null, this);

    // checks soundwave collision with player
    game.physics.arcade.overlap(player, soundwaves, collectWave, null, this);

    // check boundaries and advance player if necessary
    game.physics.arcade.overlap(player, rightBound, nextScreen);
    game.physics.arcade.overlap(player, leftBound, previousScreen);
    game.physics.arcade.overlap(player, upperBound, upScreen);
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
    positiony = player.position.y;
    texture = player.texture;
    if (state == 2)
    {
        game.state.start('menu'); 
        state = 5;
    }
}

function collectBat(garlics, bat)
{
    bat.kill();
    bats.remove(bat);
}

function collectWave(player, soundwaves)
{
    if (health > 0)
    {
        health -= 0.5;
    }
    // else Lose();?
}