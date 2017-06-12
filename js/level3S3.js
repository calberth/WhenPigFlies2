
var frame15State = {
    create: function() {
        initializeLevel(true, true, false, false, true);
        addlevel3S3Objects();
    },

    update: function() {

        levelUpdate();

        level3S3Update();
    }
}

function addlevel3S3Objects()
{
    var scene = background.create(0,0,'L3background');

    var text = game.add.text(425, 16, 'Level3 S3', { fontSize: '32px', fill: '#000' });

    var ledge = platforms.create(400, 400, 'cloud');

    ledge.body.immovable = true;
    diveBatsInit();

    for (var i = 0; i < 8; i++){
       
        if (i == 1 || i == 3) {
            bat = bats.create(i * 290 + 130, game.world.height - 125, 'bat');
            initNewSinkingCloud(i * 290 + 30, game.world.height - 450, 0, 100); // upper
        }
        else {
            initNewSinkingCloud(i * 190 + 30, game.world.height - 350, 0, 100); // upper
        }
    }
}

function level3S3Update()
{
    if (cloudTimer % 200 == 0) { // middle level
        initNewSolidCloud(game.world.width - 50, game.world.height - 100, -150);
    }
    cloudTimer++;
    
    if (cloudTimer % 25 == 0) {
        createSoundwaves(bats);
    }
    
    cloudTimer++;
    checkSoundwaves();
}