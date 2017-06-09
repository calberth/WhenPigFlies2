var cloudTimer;

var frame5State = {
    create: function() {
        initializeLevel(false, false, true, true);
        addlevel1S1Objects();
    },

    update: function() {

        checkCollisions();
        movePlayer();
        checkBattle();
        updateHealthBar(health);
        updateStaminaBar(stamina);
        checkLose();

        level1S1Update();
    }
}

function addlevel1S1Objects()
{
    var scene = background.create(0,0,'L1background');

    var text = game.add.text(425, 16, 'Level1 S1', { fontSize: '32px', fill: '#000' });

    cloudTimer = 0;
    for (var i = 0; i < 4; i++){
        if (i == 2) {
            initNewSinkingCloud(i * 290, game.world.height - 500, 0, 0);
        }
        else {
            initNewSolidCloud(i * 290, game.world.height - 500, 0);
        }
    }
}

function level1S1Update()
{
    if (cloudTimer % 200 == 0) { // middle level
        initNewSolidCloud(game.world.width - 50, game.world.height - 100, -150);
    }
    cloudTimer++;
}
