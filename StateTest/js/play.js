var playState = {
    
    create: function() {				
		
		// Prepare the keyboard so that the human player can move the
		// player sprite around
		this.keyboard = game.input.keyboard;

		// Create the player sprite and enable physics
		this.player = game.add.sprite(16, 16, 'player');		
		game.physics.enable(this.player, Phaser.Physics.ARCADE);	
		
		// Create the win sprite and enable physics
		this.win = game.add.sprite(256, 256, 'win');
		game.physics.enable(this.win, Phaser.Physics.ARCADE);

    },
    
    update: function() {      
		
		// When the player sprite and win sprite overlap, the Win function
		// is called (notice that the Win function is capitalized while
		// the win sprite is not).
		game.physics.arcade.overlap(this.player, this.win, this.Win, null, this);
		
		// Finally, we give the human player a means of moving the 'player' sprite (W,A,S,D
		// in this case)		
		// Enabling movement along the x axis
		if (this.keyboard.isDown(Phaser.Keyboard.A)) {
			this.player.body.velocity.x = -175;
		} else if (this.keyboard.isDown(Phaser.Keyboard.D)) {
			this.player.body.velocity.x = 175;		
		} else {
			this.player.body.velocity.x = 0;
		}
		// Enabling movement along the y axis
		if (this.keyboard.isDown(Phaser.Keyboard.W)) {
			this.player.body.velocity.y = -175;
		} else if (this.keyboard.isDown(Phaser.Keyboard.S)) {
			this.player.body.velocity.y = 175;
		} else{
			this.player.body.velocity.y = 0;
		}
	},
	
	Win: function() {
		// We start the win state
		game.state.start('win');
	}

}
