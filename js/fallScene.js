var fallFrameCount = 0;
var saveYVelocity;
var fallingSound;


var fallSceneState = {
    create: function() {

        positionx = game.world.width / 2;
        positiony = 0;
        initializeLevel(false, false, false, false, false);
        addfallSceneObjects();

        // var playButton = this.game.add.button(475, 550, 'play', this.restart, this);
    },
    
    // The restart function calls the menu state    
    restart: function () {
        health = stamina = 100;
        if (state <= 8)
        {
            state = 5;
            game.state.start('frame5'); 
        }
        else if (state <= 12)
        {
            state = 9;
            game.state.start('frame9'); 
        }
        else if (state <= 16)
        {
            state = 13;
            game.state.start('frame13');        
        }  
    },  

    update: function() {
        tumble();
        fallFrameCount++;
    }
}

function tumble() {
    player.angle += 5;

    if (player.body.position.y > 550) {
        fallingSound.stop();
        player.angle = 180;
        game.state.start('lose')
    }
}

function initPig() {
    game.physics.arcade.enable(player);
    player.enableBody = true;
    player.anchor.setTo(0.25, 0.5);
    player.body.gravity.y = 300;
}

function setFallBackground() {
    var bg;
    if (state <= 8)
    {
        bg = 'L1background';
    }
    else if (state <= 12)
    {
        bg = 'L2background';
    }
    else if (state <= 16)
    {
        bg = 'L3background';      
    }  
    var scene = background.create(0, 0, bg);
}

function addfallSceneObjects()
{
    setFallBackground();

    var roos = game.add.sprite(-200, 150, 'rooster');

    fallingSound = game.add.audio('falling');

    fallingSound.play();

    initPig();
}