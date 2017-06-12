//var traversingCloud;

var frame9State = {
    create: function() {
        initializeLevel(false, true, false, true, false);
        addlevel2S1Objects();
    },

    update: function() {

        checkCollisions();
        movePlayer();
        checkBattle();
        updateHealthBar(health);
        updateStaminaBar(stamina);
        checkLose();

        level2S1Update();
    }
}

function addlevel2S1Objects()
{
    var scene = background.create(0,0,'L2background');

    //var text = game.add.text(425, 16, 'Level2 S1', { fontSize: '32px', fill: '#000' });

    var ledge = platforms.create(400, 400, 'cloud');

    ledge.body.immovable = true;

    //initNewSolidCloud(game.world.width / 2 - 100, game.world.height - 480, 0); // bat cloud
    for (var i = 0; i < 5; i++) {
        initNewSolidCloud(i * 250, game.world.height - 670, 0);
        bat = bats.create(i * 290 + 100, game.world.height - 580, 'batSheet');
        bat.animations.add('flying');
        bat.animations.play('flying', game.rnd.integerInRange(5, 10), true);
        bat.anchor.setTo(0.5, 0.5);
        //bat.angle = 180;
    }

    initNewSolidCloud(0, game.world.height - 50);
    initNewSolidCloud(game.world.width - 200, game.world.height - 50);
    // traversingCloud = platforms.create(100, game.world.height - 50, 'solidCloud'); // lower traverser
    // traversingCloud.body.immovable = true;
    // traversingCloud.body.velocity.x = 80;

    // diveBatsInit();
    // makeDiveBat(game.world.width - 570, game.world.height - 360);
    cloudTimer = 0;
}

function level2S1Update()
{
    for (var i = 0; i < bats.children.length; i++) {
        if (player.body.x >= bats.children[i].x - 200 && player.body.x <= bats.children[i].x + 200) {
            if (cloudTimer % 150 == 0) {
                createSoundwavesUp(bats, true);
            }
        }
    }
    cloudTimer++;
}
