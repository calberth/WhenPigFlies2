
var frame8State = {
    create: function() {
        initializeLevel(true, false, true, false);
        addlevel1S4Objects();
    },

    update: function() {

        checkCollisions();
        movePlayer();
        checkBattle();
        updateHealthBar(health);
        updateStaminaBar(stamina);
        checkLose();

        level1S4Update();
    }
}

function addlevel1S4Objects()
{
    var scene = background.create(0,0,'L1background');

    var text = game.add.text(425, 16, 'Level1 S4', { fontSize: '32px', fill: '#000' });

    var ledge = platforms.create(150, 200, 'cloud');

    ledge.body.immovable = true;
}

function level1S4Update()
{
    
}