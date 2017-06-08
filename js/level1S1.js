
var frame5State = {
    create: function() {
        initializeLevel(false, false, true);
        addlevel1S1Objects();
    },

    update: function() {

        checkCollisions();
        movePlayer();
        checkBattle();
        updateHealthBar(health);
        updateStaminaBar(stamina);
        checkLose();

        level1S1Update();
    }
}

function addlevel1S1Objects()
{
    var scene = background.create(0,0,'L1background');

    var text = game.add.text(425, 16, 'Level1 S1', { fontSize: '32px', fill: '#000' });

    var ledge = platforms.create(400, 400, 'cloud');

    ledge.body.immovable = true;

}

function level1S1Update()
{
    
}