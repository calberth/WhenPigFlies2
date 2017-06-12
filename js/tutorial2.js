var returningt2 = false;

var frame2State = {
    create: function() {
        initializeLevel(true, true, true, false, false);
        addtutorial2Objects();
    },

    update: function() {
        
        levelUpdate();

        tutorial2Update();
    }
}


function addtutorial2Objects()
{
    var scene = background.create(0,0,'sky');

    //var text = this.game.add.text(425, 16, 'Tutorial2', { fontSize: '32px', fill: '#000' });

    var ground = platforms.create(0, this.game.world.height - 64, 'ground');
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(3,2);
    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    field = background.create(0, 519, 'garlicField');

    //field.body.immovable = true;
    if (!returningt2) {
        truck = background.create(game.world.width - 500, 395, 'truck');
    }
    else {
        truck = background.create(100, 395, 'truck');
    }
    truck.scale.setTo(.65, .65);
    game.physics.arcade.enable(truck);
    truck.body.velocity.x = 0;
    
    var barn = background.create(0, 250, 'barn');
    barn.scale.setTo(1.2, 1.2);

    player.bringToTop();
    returningt2 = true;

    timerText = game.add.text(450, 20, 'Try flying upward', { font: 'Lato', fontSize: '32px', fill: '#fff' });
    timerText.visible = false;

    if (hasGarlic) {
        initNewSolidCloud(290, game.world.height - 450, 0);
        initNewSolidCloud(590, game.world.height - 250, 0);
        addGrenade(290, game.world.height - 420, 0);
        var bombText = game.add.text(300, game.world.height - 380, 'Pick up a grenade and press [control] to drop', { font: 'Lato', fontSize: '32px', fill: '#fff' });
    }

    
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
    if (incTimer == true)
    {
        timer++;
    }
    if (timer >= 2000)
    {
        timerText.visible = true;
    }
    
}