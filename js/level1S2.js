var lightning;
var bolt;

var frame6State = {
    create: function() {
        initializeLevel(false, true, false, true);
        addlevel1S2Objects();
    },

    update: function() {

        checkCollisions();
        movePlayer();
        checkBattle();
        updateHealthBar(health);
        updateStaminaBar(stamina);
        checkLose();

        level1S2Update();
    }
}

function addlevel1S2Objects()
{
    var scene = background.create(0,0,'L1background');

    var text = game.add.text(425, 16, 'Level1 S2', { fontSize: '32px', fill: '#000' });

    // var ledge = platforms.create(400, 400, 'cloud');

    // ledge.body.immovable = true;
    lightning = game.add.group();
    lightning.enableBody = true;

    bolt = lightning.create(500, game.world.height - 570, 'lightning');
    bolt.body.collideWorldBounds = true;
    game.physics.arcade.enable(bolt);
    bolt.enableBody = true;
    bolt.scale.setTo(.25, .25);

    cloudTimer = 0;
}

function level1S2Update()
{
    // upper level
    if (cloudTimer % 250 == 0) {
        initNewStormCloud(0, game.world.height - 670, 50);
    }
    // middle level
    if (cloudTimer % 150 == 0) { 
        initNewSolidCloud(0, game.world.height - 400, 80);
    }
    // lower level
    if (cloudTimer % 200 == 0) { 
        initNewSolidCloud(game.world.width, game.world.height - 100, -180);
    }
    if (cloudTimer % 25 == 0) {
        shootLightning();
    }
    cloudTimer++;
}

function shootLightning() {
    for (var i = 0; i < lightning.children.length; i++){
        lightning.children[i].kill();
    }
    bolt = lightning.create(game.rnd.integerInRange(100, 900), game.world.height - 570, 'lightning');
    bolt.body.collideWorldBounds = true;
    game.physics.arcade.enable(bolt);
    bolt.enableBody = true;
    bolt.scale.setTo(.25, .25); 
}