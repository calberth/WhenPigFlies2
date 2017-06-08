        //Since these are global, they should persist between levels
        var player;

        var background;
        var platforms;
        var boundaries;
        var rightBound;
        var leftBound;
        var upperBound;
        var lowerBound;

        var cursors;
        var space;

        var enemy;
        var bats;
        var soundwaves;

        var stars;
        var health = 100;
        var stamina = 100;

        var garlics;
        var garlicTime = 0;

        var direction;

        var positionx;
        var positiony; 

        var Direction = {
          left : 0, 
          right: 1
        };

        var anim = 0;
        var animL = 0;

        var texture;
        var state;


var menuState = {
  
    create: function () {
		
		// Here we display the name of the game. When defining text, the
		// first two parameters are x and y positional values, then the
		// actual text, and then the 'font' defines the font (of course)
		// and 'fill' refers to the font color.
        var nameLabel = game.add.text(80, 80, 'When Pig Flies: The Squeakqul',
                                    { font: '50px Arial', fill: '#ffffff' });
        
        // We give the player instructions on how to start the game
        var startLabel = game.add.text(80, game.world.height-80,
                                       'press the "W" key to start',
                                       {font: '25px Arial', fill: '#ffffff' });
        
        // We define the wkey as Phaser.Keyboard.W so that we can act
        // when the player presses it
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        
        // When the player presses the W key, we call the start function
        wkey.onDown.addOnce(this.start, this);
    },
    
    // The start function calls the play state    
    start: function () {
        positionx = 32;
        positiony = 540; 
        texture = 'pigR1';  
        state = 2;
        game.state.start('frame2'); 
    },    
};
