
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

    var ledge = platforms.create(400, 400, 'cloud');

    ledge.body.immovable = true;
}

function level1S2Update()
{
    if (cloudTimer % 300 == 0) { // upper level
        initNewSinkingCloud(game.world.height - 400);
    }
    if (cloudTimer % 200 == 0) { // lower level
        initNewSolidCloud(game.world.width - 50, game.world.height - 100, -150);
    }
}