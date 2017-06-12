
var frame13State = {
    create: function() {
        initializeLevel(true, true, false, false, true);
        addlevel3S1Objects();
    },

    update: function() {

        checkCollisions();
        movePlayer();
        checkBattle();
        updateHealthBar(health);
        updateStaminaBar(stamina);
        checkLose();

        level3S1Update();
    }
}

function addlevel3S1Objects()
{
    var scene = background.create(0,0,'L3background');

    //var text = game.add.text(425, 16, 'Level3 S1', { fontSize: '32px', fill: '#000' });

    var ledge = platforms.create(400, 400, 'cloud');

    ledge.body.immovable = true;

    diveBatsInit();

    for (var i = 0; i < 4; i++){
        i
        if (i == 1 || i == 3) {
            bat = bats.create(i * 290 + 130, game.world.height - 125, 'batSheet');
            bat.animations.add('flying');
            bat.animations.play('flying', game.rnd.integerInRange(5, 10), true);

            makeDiveBat(i * 290 + 30, game.world.height - 225)
            initNewSinkingCloud(i * 290 + 30, game.world.height - 450, 0, 100); // upper
        }
        else {
            initNewSolidCloud(i * 290 + 30, game.world.height - 450, 0); // upper
        }
    }
}

function level3S1Update()
{
    if (cloudTimer % 200 == 0) { // middle level
        initNewSolidCloud(game.world.width - 50, game.world.height - 100, -150);
    }
    cloudTimer++;
    
    if (cloudTimer % 110 == 0)
    {
        createSoundwaves(bats, false);
    }
    

	updateDiveBats();

}