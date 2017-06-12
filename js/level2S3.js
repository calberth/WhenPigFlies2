
var frame11State = {
    create: function() {
        initializeLevel(false, true, false, true, false);
        addlevel2S3Objects();
    },

    update: function() {

        levelUpdate();

        level2S3Update();
    }
}

function addlevel2S3Objects()
{
    var scene = background.create(0,0,'L2background');

    var text = game.add.text(425, 16, 'Level2 S3', { fontSize: '32px', fill: '#000' });

    diveBatsInit();
    for (var i = 0; i < 3; i++) {
        makeDiveBat(game.rnd.integerInRange(0, 670), game.rnd.integerInRange(0, 400));
    }

    cloudTimer = 0;
}

function level2S3Update()
{
    if (cloudTimer % 250 == 0) { 
        initNewSolidCloud(0, game.world.height - 100, 80); // lower
    }
    if (cloudTimer % 400 == 0) {
        initNewSolidCloud(game.world.width - 100, game.world.height - 500, -80); // upper
    }
    updateDiveBats();
    cloudTimer++;   
}