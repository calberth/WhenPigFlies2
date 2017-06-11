var loseState = {

    create: function() {	
		
    	var winLabel = game.add.text(80, 80, 'YOU DIED',
    								{font: '50px Arial', fill: '#00FF00' });

    		// We give the player instructions on how to restart the game
    	var startLabel = game.add.text(80, game.world.height-80,
    								   'press the "W" key to restart',
    								   {font: '25px Arial', fill: '#ffffff' });

        // We define the wkey as Phaser.Keyboard.W so that we can act
        // when the player presses it
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        
        // When the player presses the W key, we call the restart function
        wkey.onDown.addOnce(this.restart, this);
    },
    
    // The restart function calls the menu state    
    restart: function () {
        health = stamina = 100;
        if (state <= 4)
        {
            //state = 3;
            //game.state.start('frame3'); 
            state = 2;
            game.state.start('frame2'); 
        }
        else if (state <= 8)
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
        else
        {
            game.state.start('bossLevel');  
        }   
    }, 	
}
