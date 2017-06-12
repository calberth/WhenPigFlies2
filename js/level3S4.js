
var frame16State = {
    create: function() {
        initializeLevel(true, true, false, false, true);
        addlevel3S4Objects();
        var ekey = game.input.keyboard.addKey(Phaser.Keyboard.E);
        ekey.onDown.addOnce(this.start, this);
    },

    update: function() {

        levelUpdate();

        level3S4Update();
    },

    start: function() {
        positionx = 32;
        positiony = 540;
        texture = 'pigR1';
        state = 17;
        game.state.start('bossLevel');
    }
};

function addlevel3S4Objects()
{
    var scene = background.create(0,0,'L3background');

    var text = game.add.text(425, 16, 'Level3 S4', { fontSize: '32px', fill: '#000' });

    var ledge = platforms.create(400, 400, 'cloud');

    ledge.body.immovable = true;

    diveBatsInit();
    addApple(400, 300);

    var enterLabel = game.add.text(80, game.world.height-80, 'press "e" to enter the castle',
                                       {font: '25px Arial', fill: '#ffffff' });
    for (i = 0; i < 20; i++)
        makeDiveBat(i * 290 + 30, game.world.height - 225);
}

function level3S4Update()
{
    
}

