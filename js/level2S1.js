
var frame9State = {
    create: function() {
        initializeLevel(false, true, false, true);
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

    var text = game.add.text(425, 16, 'Level2 S1', { fontSize: '32px', fill: '#000' });

    var ledge = platforms.create(400, 400, 'cloud');

    ledge.body.immovable = true;
}

function level2S1Update()
{
    
}