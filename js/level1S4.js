
var frame8State = {
    create: function() {
        initializeLevel(true, false, true, false);
        addlevel1S4Objects();
    },

    update: function() {

        checkCollisions();
        movePlayer();
        checkBattle();
        updateHealthBar(health);
        updateStaminaBar(stamina);
        checkLose();

        level1S4Update();
    }
}

function addlevel1S4Objects()
{
    var scene = background.create(0,0,'L1background');

    var text = game.add.text(425, 16, 'Level1 S4', { fontSize: '32px', fill: '#000' });


    cloudTimer = 0;


}

function level1S4Update()
{
    if (cloudTimer % 200 == 0) { // middle level
        initNewSinkingCloud(0, game.world.height - 350, 150);
    }

    if (cloudTimer % 350 == 0) {
        initNewSolidCloud(0, game.world.height - 600, 50);  // upper
    }

    if (cloudTimer % 100 == 0) { 
        initNewSolidCloud(game.world.width, game.world.height - 100, -180);
        if (cloudTimer % 200 == 0) {
            bat = bats.create(game.world.width + 50, game.world.height - 125, 'bat');
            bat.body.velocity.x = -180;
        }
    }

    for (var i = 0; i < bats.children.length; i++) {
        if (player.body.x >= bats.children[i].x - 150 && player.body.x <= bats.children[i].x + 150) {
            if (cloudTimer % 25 == 0) {
                createSoundwaves(bats);
            }
        }
    }
    cloudTimer++;
    
}