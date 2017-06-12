var fallFrameCount = 0;
var saveYVelocity;
var fallPig;


var fallSceneState = {
    create: function() {

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
        // if (player.body.position.y < 500) {
        //     player.body.position.y += 5;
        // }
        // if (fallFrameCount >= 200) {
        //     var playButton = this.game.add.button(475, 550, 'play', this.restart, this);
        // }

        fallFrameCount++;
    }
}

function tumble() {
    fallPig.angle += 5;
    //player.body.velocity.y -= 15;
}

function initPig() {
    player.body.position.x = game.world.width;
    player.body.position.y = 0;

    saveYVelocity = player.body.velocity.y;

    fallPig = game.add.sprite(game.world.width / 2, 0, 'pigR1');
    game.physics.arcade.enable(fallPig);
    fallPig.enableBody = true;
    fallPig.anchor.setTo(0.25, 0.5);
    fallPig.body.velocity.y = 100;
    // fallPig.angle += 2.5;
}

function addfallSceneObjects()
{
    var scene = background.create(0, 0, 'sky-morning');

    var roos = game.add.sprite(-200, 150, 'rooster');

    initPig();
}