
function initializeLevel(left, right, up, down)
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

    if (down)
    {
        lowerBound = boundaries.create(0, 674, 'upBound');
        lowerBound.scale.setTo(9,1);
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

    createHealthBar(health);
    createStaminaBar(health);
    createGarlicGrenadesBar();

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
    game.physics.arcade.overlap(player, bats, hitBat, null, this);

    game.physics.arcade.overlap(player, diveBats, hitDiveBat, null, this); //Divebat and bat are difference groups
    game.physics.arcade.overlap(garlics, diveBats, killDBat, null, this);

    // check boundaries and advance player if necessary
    game.physics.arcade.overlap(player, rightBound, nextScreen);
    game.physics.arcade.overlap(player, leftBound, previousScreen);
    game.physics.arcade.overlap(player, upperBound, upScreen);
    game.physics.arcade.overlap(player, lowerBound, downScreen);

    //game.physics.arcade.overlap(player, garlics, collectGarlic, null, this);
    game.physics.arcade.overlap(player, sack, collectSack, null, this);

    game.physics.arcade.overlap(player, lightning, collectLightning, null, this);

    updateGGBar();
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
        state = 5;
        game.state.start('frame5'); 
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
}

function collectGarlic(player, garlic) {
    hasGarlic = true;
    garlic.kill();
    //garlics.remove(garlic);
}

function collectSack(player, sack) {
    sack.kill();
}

function collectLightning(player, lightning) {
    if (health > 0) {
        health -= 0.5;
    }
}


function hitBat(player, bat) {
    if (health > 0)
    {
        health -= 0.5;
    }
} 
function hitDiveBat(player, bat) {
    if (health > 0)
    {
        health -= 0.5;
    }
}