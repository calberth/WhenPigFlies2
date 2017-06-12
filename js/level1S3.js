
var frame7State = {
    create: function() {
        initializeLevel(true, true, false, false, true);
        addlevel1S3Objects();
    },

    update: function() {

        checkCollisions();
        movePlayer();
        checkBattle();
        updateHealthBar(health);
        updateStaminaBar(stamina);
        checkLose();

        level1S3Update();
    }
}

function addlevel1S3Objects()
{
    var scene = background.create(0,0,'L1background');

    var text = game.add.text(425, 16, 'Level1 S3', { fontSize: '32px', fill: '#000' });

    for (var i = 0; i < 4; i++){
        initNewSolidCloud(i * 290 + 30, game.world.height - 100, 0); // lower
        if (i == 1 || i == 3) {
            bat = bats.create(i * 290 + 80, game.world.height - 185, 'batSheet');
            bat.animations.add('flying');
            bat.animations.play('flying', game.rnd.integerInRange(5, 10), true);


            initNewSinkingCloud(i * 290 + 30, game.world.height - 450, 0, 100); // upper
        }
        else {
            initNewSolidCloud(i * 290 + 30, game.world.height - 450, 0); // upper
        }
    }
    lightning = game.add.group();
    lightning.enableBody = true;

    bolt = lightning.create(500, game.world.height - 600, 'lightning');
    bolt.body.collideWorldBounds = true;
    game.physics.arcade.enable(bolt);
    bolt.enableBody = true;
    bolt.scale.setTo(.25, .25);

    addApple(320, game.world.height - 400);
    cloudTimer = 0;
}

function level1S3Update()
{
    for (var i = 0; i < bats.children.length; i++) {
        if (player.body.x >= bats.children[i].x - 100 && player.body.x <= bats.children[i].x + 100) {
            if (cloudTimer % 25 == 0) {
                createSoundwaves(bats, false);
            }
        }
    }
    // upper level
    if (cloudTimer % 200 == 0) {
        initNewStormCloud(0, game.world.height - 670, 50); // upper
    }
    if (cloudTimer % 25 == 0) {
        shootLightning();
    }
    cloudTimer++;
    
}