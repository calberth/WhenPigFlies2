var returningt2 = false;

var frame2State = {
    create: function() {
        initializeLevel(true, true, true, false);
        addtutorial2Objects();
    },

    update: function() {

        checkCollisions();
        movePlayer();
        checkBattle();
        updateHealthBar(health);
        updateStaminaBar(stamina);
        checkLose();


        tutorial2Update();
    }
}


function addtutorial2Objects()
{
    var scene = background.create(0,0,'sky');

    var text = this.game.add.text(425, 16, 'Tutorial2', { fontSize: '32px', fill: '#000' });

    var ground = platforms.create(0, this.game.world.height - 64, 'ground');
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(3,2);
    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    // var ledge = platforms.create(400, 400, 'cloud');

    // ledge.body.immovable = true;

    var field = game.add.sprite(0, 519, 'garlicField');
    //field.body.immovable = true;

    if (!returningt2) {
        truck = game.add.sprite(game.world.width - 500, 395, 'truck');
    }
    else {
        truck = game.add.sprite(100, 395, 'truck');
    }
    truck.scale.setTo(.65, .65);
    game.physics.arcade.enable(truck);
    truck.body.velocity.x = 0;

    var barn = game.add.sprite(0, 250, 'barn');
    barn.scale.setTo(1.2, 1.2);

    player.bringToTop();
    returningt2 = true;
}

function tutorial2Update()
{
    t3truckpass = true; // t3truckpass initiliazed in tutorial3.js, 
    if (truck.body.x > 100){
        truck.body.velocity.x -= 7;
    }
    else {
        truck.body.velocity.x = 0;
    }
    
}