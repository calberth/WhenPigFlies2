
function initializeLevel()
{
    background = game.add.group();

    platforms = game.add.group();
    platforms.enableBody = true;

    boundaries = game.add.group();
    boundaries.enableBody = true;
    rightBound = boundaries.create(1199, 0, 'levelBound');
    rightBound.scale.setTo(1,5); 

    leftBound = boundaries.create(-5, 0, 'levelBound');
    leftBound.scale.setTo(1,5);

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
    game.physics.arcade.overlap(player, rightBound, NextLevel);
    game.physics.arcade.overlap(player, leftBound, previousLevel);
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

function NextLevel()
{
    positionx = 32;
    positiony = player.world.y;
    texture = player.texture;
    if (game.state.getCurrentState() == tutorialState)
    {
        game.state.start('tutorial2');
    }
    else if (game.state.getCurrentState() == tutorial2State) {
        game.state.start('bossLevel');
    }
}

function previousLevel()
{
    positionx = 1100;
    positiony = player.position.y;
    texture = player.texture;
    if (game.state.getCurrentState() == tutorialState)
    {
        game.state.start('menu');
    }
    else if (game.state.getCurrentState() == tutorial2State)
    {
        game.state.start('tutorial');
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