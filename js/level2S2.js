
var frame10State = {
    create: function() {
        initializeLevel(true, false, true);
        addlevel2S2Objects();
    },

    update: function() {

        checkCollisions();
        movePlayer();
        checkBattle();
        updateHealthBar(health);
        updateStaminaBar(stamina);
        checkLose();

        level2S2Update();
    }
}

function addlevel2S2Objects()
{
    var scene = background.create(0,0,'L2background');

    var text = game.add.text(425, 16, 'Level2 S2', { fontSize: '32px', fill: '#000' });

    var ledge = platforms.create(400, 400, 'cloud');

    ledge.body.immovable = true;
}

function level2S2Update()
{
    
}