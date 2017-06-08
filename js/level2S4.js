
var frame12State = {
    create: function() {
        initializeLevel(false, true, false, false);
        addlevel2S4Objects();
    },

    update: function() {

        checkCollisions();
        movePlayer();
        checkBattle();
        updateHealthBar(health);
        updateStaminaBar(stamina);
        checkLose();

        level2S4Update();
    }
}

function addlevel2S4Objects()
{
    var scene = background.create(0,0,'L2background');

    var text = game.add.text(425, 16, 'Level2 S4', { fontSize: '32px', fill: '#000' });

    var ledge = platforms.create(400, 400, 'cloud');

    ledge.body.immovable = true;
}

function level2S4Update()
{
    
}