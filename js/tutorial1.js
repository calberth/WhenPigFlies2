var collectibles;
var sack;

var frame1State = {

    create: function() {
        initializeLevel(false, true, false, false);
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
    scene.scale.setTo(3,3);

    var text = game.add.text(425, 16, 'Tutorial1', { fontSize: '32px', fill: '#000' });

    var ground = platforms.create(0, game.world.height - 64, 'barnGround');
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(3,2);
    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    var loftGround = platforms.create(320, 220, 'barnGround');
    loftGround.scale.setTo(1.7, .5);
    loftGround.body.immovable = true;

    collectibles = game.add.group();
    collectibles.enableBody = true;

    sack = collectibles.create(400, 160, 'sack');
    sack.body.collideWorldBounds = true;
    game.physics.arcade.enable(sack);
    sack.enableBody = true;
    sack.scale.setTo(.05, .05);

    var garlic = garlics.create(500, 180, 'garlic');
    garlic.body.collideWorldBounds = true;

    player.bringToTop();
}

function tutorial1Update()
{

}
