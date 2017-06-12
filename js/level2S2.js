var traversingCloud;

var frame10State = {
    create: function() {
        initializeLevel(true, false, true, false, true);
        addlevel2S2Objects();
    },

    update: function() {

        checkCollisions();
        movePlayer();
        checkBattle();
        updateHealthBar(health);
        updateStaminaBar(stamina);
        checkLose();

        level2S2Update();
    }
}

function addlevel2S2Objects()
{
    var scene = background.create(0,0,'L2background');

    //var text = game.add.text(425, 16, 'Level2 S2', { fontSize: '32px', fill: '#000' });

    // var ledge = platforms.create(900, 200, 'cloud');

    // ledge.body.immovable = true;

    for (var i = 0; i < 5; i++) {
        if (i == 1) {
            initNewSinkingCloud(i * 250, game.world.height - 480, 0, 50); // upper lining clouds
        }
        else {
            initNewSolidCloud(i * 250, game.world.height - 480, 0);
        }
    }

    traversingCloud = platforms.create(100, game.world.height - 50, 'solidCloud'); // lower traverser
    traversingCloud.body.immovable = true;
    traversingCloud.body.velocity.x = 80;

    diveBatsInit();
    makeDiveBat(game.world.width - 570, game.world.height - 360);
}

function level2S2Update()
{
    if (traversingCloud.body.x >= 700) {
        traversingCloud.body.velocity.x = 80;
    }
    else if (traversingCloud.body.x <= 200) {
        traversingCloud.body.velocity.x = 80;
    }

    updateDiveBats();
}