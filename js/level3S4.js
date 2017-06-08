
var frame16State = {
    create: function() {
        initializeLevel(true, true, false);
        addlevel3S4Objects();
    },

    update: function() {

        checkCollisions();
        movePlayer();
        checkBattle();
        updateHealthBar(health);
        updateStaminaBar(stamina);
        checkLose();

        level3S4Update();
    }
}

function addlevel3S4Objects()
{
    var scene = background.create(0,0,'L3background');

    var text = game.add.text(425, 16, 'Level3 S4', { fontSize: '32px', fill: '#000' });

    var ledge = platforms.create(400, 400, 'cloud');

    ledge.body.immovable = true;
}

function level3S4Update()
{
    
}