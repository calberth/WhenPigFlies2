
var frame14State = {
    create: function() {
        initializeLevel(true, true, false);
        addlevel3S2Objects();
    },

    update: function() {

        checkCollisions();
        movePlayer();
        checkBattle();
        updateHealthBar(health);
        updateStaminaBar(stamina);
        checkLose();

        level3S2Update();
    }
}

function addlevel3S2Objects()
{
    var scene = background.create(0,0,'L3background');

    var text = game.add.text(425, 16, 'Level3 S2', { fontSize: '32px', fill: '#000' });

    var ledge = platforms.create(400, 400, 'cloud');

    ledge.body.immovable = true;
}

function level3S2Update()
{
    
}