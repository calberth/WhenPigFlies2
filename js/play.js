		//Since these are global, they should persist between levels
		var player;
		var platforms;
		var cursors;
		var enemy;

		var bats;
		var soundwaves;

		var stars;
		var health;
		var stamina;
		var space;
		var garlics;
		var direction;

		var Direction = {
		  left : 0, 
		  right: 1
		};

		var anim = 0;
		var animL = 0;
		var garlicTime = 0;
		var boundaries;

var playState = {

	//doesn't let you put globals here

	create: function() {

		health = stamina = 100;
	
	    
	    //  A simple background for our game
	    game.add.sprite(0, 0, 'sky');
	    //game.add.sprite(-5, -5, 'garlic');
	    bars = game.add.group();

	    createHealthBar(100); //there's a glitch on variables on second load
	    createStaminaBar(100);

	    //  The platforms group contains the ground and the 2 ledges we can jump on
	    platforms = game.add.group();
	    //  We will enable physics for any object that is created in this group
	    platforms.enableBody = true;
	    // Here we create the ground.
	    var ground = platforms.create(0, game.world.height - 64, 'ground');
	    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
	    ground.scale.setTo(2, 5);
	    //  This stops it from falling away when you jump on it
	    ground.body.immovable = true;


	    //For travel between levels; some of these boundaries will need to be rotated
	    boundaries = game.add.group();
	    boundaries.enableBody = true;
	    var rightBound = boundaries.create(1100, 100, 'levelBound');
	    rightBound.scale.setTo(1, 5);


	    //  Now let's create two ledges
	    var ledge = platforms.create(400, 400, 'cloud');

	    ledge.body.immovable = true;

	    ledge = platforms.create(-150, 250, 'cloud');
	    ledge.body.immovable = true;

	    // The player and its settings
	    player = game.add.sprite(32, game.world.height - 150, 'pigFR1');

	    //  We need to enable physics on the player
	    game.physics.arcade.enable(player);

	    //  Player physics properties. Give the little guy a slight bounce.
	    player.body.bounce.y = 0.2;
	    player.body.gravity.y = 300;
	    player.body.collideWorldBounds = true;

	    //ENEMIES
	    bats = game.add.group();
	    bats.enableBody = true;
	    soundwaves = game.add.group();
	    soundwaves.enableBody = true;

	    for (var j = 3; j < 12; j++) {
	        var bat = bats.create(j * 90, game.world.height - 100, 'bat');
	        bat.body.gravity.y = 0;
	        bat.body.bounce.y = 0;

	        var soundwave = soundwaves.create(j * 90 - 10, game.world.height - 150, 'soundwave');
	        soundwave.body.gravity.y = Math.floor(Math.random() * (0 + 100)) - 100;
	        soundwave.body.bounce.y = 0;
	    }

	    //  Our controls.
	    cursors = game.input.keyboard.createCursorKeys(); 
	    space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	    garlics = game.add.group();

	},

	

	update: function() {

	    //  Reset the players velocity (movement)
	    player.body.velocity.x = 0;

	    //  Collide the player and the stars with the platforms
	    var hitPlatform = game.physics.arcade.collide(player, platforms);
	    game.physics.arcade.collide(stars, platforms);

	    //var hitBoundary = game.physics.arcade.collide(player, boundaries);

	    //Checks garlic & Soundwave overlap
	    game.physics.arcade.overlap(garlics, bats, collectBat, null, this); 
	    game.physics.arcade.overlap(player, soundwaves, collectWave, null, this); 

	    game.physics.arcade.overlap(player, boundaries, this.NextLevel); 

	    if (cursors.left.isDown) {
	        player.body.velocity.x = -150;
	        //player.direction = Direction.left;
	        
	        if (player.body.velocity.y < -1) {
	            if (animL % 10 == 0)
	                player.loadTexture('pigFL1');
	            else if (animL % 5 == 0)
	                player.loadTexture('pigFL2');
	        }
	        else {//if (hitPlatform) {
	            if (animL % 10 == 0)
	                player.loadTexture('pigL1');
	            else if (animL % 5 == 0)
	                player.loadTexture('pigL2');
	        }
	        anim = 10;
	        animL++;
	        
	    }

	    else if (cursors.right.isDown) {
	        //  Move to the right
	        player.body.velocity.x = 150;
	        //player.direction = Direction.right;
	        

	        if (player.body.velocity.y < -1) {
	            if (anim % 10 == 0)
	                player.loadTexture('pigFR1');
	            else if (anim % 5 == 0)
	                player.loadTexture('pigFR2');
	        }
	        else {//if (hitPlatform) {
	            if (anim % 10 == 0)
	                player.loadTexture('pigR1');
	            else if (anim % 5 == 0)
	                player.loadTexture('pigR2');
	        }
	        animL = 10;
	        anim++;
	        
	    }

	    //  Allow the player to fly!
	    if (cursors.up.isDown)
	    {
	        
	        if (stamina > 0)
	        {
	            player.body.velocity.y += -10;
	            stamina -= 0.5;
	        }
	        //animL++;
	        
	    }
	    else
	    {
	        if (stamina < 100)
	        {
	            stamina += 0.25;
	        }
	    }

	    if (cursors.down.isDown) {
	        player.body.velocity.y += 10;

	    }

	    if (space.isDown) {
	        if (garlicTime % 20 == 0)
	            dropGarlic();
	        garlicTime++;
	    }

	    // If pig is in the air, flap wings
	    /*if(player.body.velocity.y < -1 ) {
	        
	        //animL++;
	        if(player.direction == Direction.left) {
	            if (animL % 10 == 0)
	                player.loadTexture('pigFL1');
	            else if (animL % 5 == 0)
	                player.loadTexture('pigFL2');
	        }
	        else {
	            if (anim % 10 == 0)
	                player.loadTexture('pigFR1');
	            else if (anim % 5 == 0)
	                player.loadTexture('pigFR2');
	        }
	    }
	    else if(player.body.velocity.y > -1  && hitPlatform){//player.body.velocity.y < 0 ){
	        if(player.direction == Direction.left) {
	            if (animL % 10 == 0)
	                player.loadTexture('pigL1');
	            else if (animL % 5 == 0)
	                player.loadTexture('pigL2');
	        }
	        else {
	            if (anim % 10 == 0)
	                player.loadTexture('pigR1');
	            else if (anim % 5 == 0)
	                player.loadTexture('pigR2');
	        }
	    }*/

	    updateHealthBar(health);
	    updateStaminaBar(stamina);

	    if (waveTimer++ % 100 == 0)
	        createSoundwaves(bats);

	    if (health <= 0 )
	    	this.Lose();
	    
	},
    
	Lose: function() {
		// We start the win state
		game.state.start('lose');
	},

	NextLevel: function() {
		game.state.start('frame2')
	}
}

function collectBat(garlics, bat) {
	bat.kill();
	bats.remove(bat);
}

function collectWave(player, soundwaves) {
    if (health > 0) 
    {
        health -= .5;
    }
    else 
    {
        healthText.text = 'Health: YOU DEAD';
    }
}
