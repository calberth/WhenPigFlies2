
var frame13State = {
    create: function() {
        initializeLevel(false, true, false);
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

    var text = game.add.text(425, 16, 'Level3 S1', { fontSize: '32px', fill: '#000' });

    var ledge = platforms.create(400, 400, 'cloud');

    ledge.body.immovable = true;
}

function level3S1Update()
{
    
}