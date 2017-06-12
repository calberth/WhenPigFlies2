var collectibles;
var sack;
var singleGarlic;
var sackCollected = false;
var getSackText;
var bombText;

var frame1State = {

    create: function() {
        initializeLevel(false, true, false, false, false);
        addtutorial1Objects();
    },

    update: function() {
        
        checkCollisions();
        movePlayer();
        checkBattle();
        updateHealthBar(health);
        updateStaminaBar(stamina);
        checkLose();

        tutorial1Update();
    }

}

function addtutorial1Objects()
{
    var scene = background.create(0,0,'barnInterior');
    scene.scale.setTo(1.27,1.27);

    var text = game.add.text(425, 16, 'Tutorial1', { fontSize: '32px', fill: '#000' });

    var ground = platforms.create(0, game.world.height - 64, 'barnGround');
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(3,2);
    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    collectibles = game.add.group();
    collectibles.enableBody = true;

    sack = collectibles.create(345, 180, 'sack');
    sack.body.collideWorldBounds = true;
    game.physics.arcade.enable(sack);
    sack.enableBody = true;
    sack.scale.setTo(.05, .05);

    singleGarlic = game.add.group();
    singleGarlic.enableBody = true;
    var garlic = singleGarlic.create(game.world.width - 340, 220, 'garlic');

    getSackText = game.add.text(460, 100, 'You need something to hold that garlic', { fontSize: '32px', fill: '#fff' });
    getSackText.visible = false;

    bombText = game.add.text(460, 100, 'To drop a garlic bomb press [space]', { fontSize: '32px', fill: '#fff' });
    bombText.visible = false;

    player.bringToTop();
}

function tutorial1Update()
{
    game.physics.arcade.overlap(player, singleGarlic, colSingleGarlic, null, this);
    game.physics.arcade.overlap(player, sack, collectSack, null, this);
    if (hasGarlic && sackCollected)
    {
        bombText.visible = true; 
    }
}

function colSingleGarlic(player, singleGarlic)
{
    
    if (sackCollected == false)
    {
        getSackText.visible = true;
    }
    else
    {
        singleGarlic.kill();
        hasGarlic = true;
    }

}

function collectSack(player, sack) {
    getSackText.visible = false;
    sack.kill();
    sackCollected = true; 
}
