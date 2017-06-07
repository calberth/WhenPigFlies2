

var tutorial2State = {
    create: function() {
        health = stamina = 100;
        initializeLevel();
        addtutorial2Objects();
    },

    update: function() {

        checkCollisions();
        movePlayer();
        checkBattle();
        updateHealthBar(health);
        updateStaminaBar(stamina);
        checkLose();

        tutorialUpdate();
    }

}

function addtutorial2Objects()
{
    var scene = background.create(0,0,'sky');

    var ground = platforms.create(0, game.world.height - 64, 'ground');
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(3,2);
    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    var ledge = platforms.create(400, 400, 'cloud');

    ledge.body.immovable = true;
}

function tutorial2Update()
{
    
}