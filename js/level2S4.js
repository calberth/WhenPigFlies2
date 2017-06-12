
var frame12State = {
    create: function() {
        initializeLevel(false, true, false, false, true);
        addlevel2S4Objects();
    },

    update: function() {

        levelUpdate();

        level2S4Update();
    }
}

function addlevel2S4Objects()
{
    var scene = background.create(0,0,'L2background');

    var text = game.add.text(425, 16, 'Level2 S4', { fontSize: '32px', fill: '#000' });

    for (var i = 0; i < 5; i++) {
        initNewSolidCloud(i * 250, game.world.height - 50, 0);
        bat = bats.create(i * 290 + 100, game.world.height - 75, 'bat')
    }

    diveBatsInit();
    for (var i = 0; i < 3; i++) {
        makeDiveBat(game.rnd.integerInRange(0, 670), game.rnd.integerInRange(0, 400));
    }
    cloudTimer = 0;
}

function level2S4Update()
{
    if (cloudTimer % 400 == 0) { // upper
        initNewSolidCloud(game.world.width - 100, game.world.height - 500, -80); 
    }
    updateDiveBats(); 

    for (var i = 0; i < bats.children.length; i++) {  // lower 
        if (player.body.x >= bats.children[i].x - 200 && player.body.x <= bats.children[i].x + 200) {
            if (cloudTimer % 150 == 0) {
                createSoundwaves(bats);
            }
        }
    }
    cloudTimer++;
}