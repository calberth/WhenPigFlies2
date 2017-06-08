

var frame1State = {

    create: function() {
        initializeLevel(false, true, false, false);
        addtutorial1Objects();
    },

    update: function() {
        checkCollisions();
        movePlayer();
        checkBattle();
        updateHealthBar(health);
        updateStaminaBar(stamina);
        checkLose();

        tutorial1Update();
    }

}

function addtutorial1Objects()
{
    var scene = background.create(0,0,'sky');

    var text = game.add.text(425, 16, 'Tutorial1', { fontSize: '32px', fill: '#000' });

    var ground = platforms.create(0, game.world.height - 64, 'ground');
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(3,2);
    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    
}

function tutorial1Update()
{
    
}
