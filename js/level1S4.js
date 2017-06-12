
var frame8State = {
    create: function() {
        initializeLevel(true, false, true, false, true);
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

    //var text = game.add.text(425, 16, 'Level1 S4', { fontSize: '32px', fill: '#000' });


    cloudTimer = 0;
    //Allows us to re-initialize pickups here
    applesPickedUp = false;
    grenadesPickedUp = false;


}

function level1S4Update()
{
    if (cloudTimer % 350 == 0) {
        initNewSolidCloud(0, game.world.height - 550, 50); // upper level>>>>
    }

    if (cloudTimer % 200 == 0) { 
        initNewSinkingCloud(0, game.world.height - 300, 150); // middle level >>>>>
    }

    if (cloudTimer % 100 == 0) { 
        initNewSolidCloud(game.world.width, game.world.height - 50, -180); // <<<< lower level with bats 
        if (cloudTimer % 200 == 0) {
            bat = bats.create(game.world.width + 50, game.world.height - 140, 'batSheet'); // +25 y-offset from cloud
            bat.animations.add('flying');
            bat.animations.play('flying', game.rnd.integerInRange(5, 10), true);
            bat.body.velocity.x = -180;
        }
    }

    for (var i = 0; i < bats.children.length; i++) {
        if (player.body.x >= bats.children[i].x - 150 && player.body.x <= bats.children[i].x + 150) {
            if (cloudTimer % 25 == 0) {
                createSoundwaves(bats, false);
            }
        }
    }
    cloudTimer++;
    
}