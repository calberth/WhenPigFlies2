var truck;
var t3truckpass = false;

var frame3State = {
    create: function() {
        initializeLevel(true, true, false, false);
        addtutorial3Objects();
    },

    update: function() {

        checkCollisions();
        movePlayer();
        checkBattle();
        updateHealthBar(health);
        updateStaminaBar(stamina);
        checkLose();

        tutorial3Update();
    }
}

function addtutorial3Objects()
{
    var scene = background.create(0,0,'sky');

        var text = game.add.text(425, 16, 'Tutorial3', { fontSize: '32px', fill: '#000' });

    var ground = platforms.create(0, game.world.height - 64, 'ground');
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(3,2);
    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    var field2 = game.add.sprite(0, 519, 'garlicField');
    //field2.body.immovable = true;

    if (!t3truckpass) {
        truck = game.add.sprite(200, 395, 'truck');
        truck.scale.setTo(.65, .65);
        game.physics.arcade.enable(truck);
        truck.body.velocity.x = 0;
    }

    player.bringToTop();
}

function tutorial3Update()
{
    if (!t3truckpass) {
        if (truck.body.x > 0) {
            truck.body.velocity.x -= 5;
        }
        else {
            t3truckpass = true;
        }
    }


}