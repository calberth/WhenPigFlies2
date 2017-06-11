
var fallSceneState = {
    create: function() {

        initializeLevel(false, false, false, false, false);
        addfallSceneObjects();

        var startLabel = game.add.text(80, game.world.height-80,
                                       'press the "W" key to restart',
                                       {font: '25px Arial', fill: '#000000' });

        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        
        // When the player presses the W key, we call the restart function
        wkey.onDown.addOnce(this.restart, this);
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

    }
}

function addfallSceneObjects()
{
    var scene = background.create(0, 0, 'sky-morning');

    var roos = game.add.sprite(-200, 150, 'rooster');
}