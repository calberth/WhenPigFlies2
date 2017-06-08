var loadState = {
	
	// The preload function is another standard Phaser function that we
	// use to define and load our assets
    preload: function() {

        var loadingLabel = game.add.text(80, 150, 'loading assets...', 
                                         {font: '30px Courier', fill: '#ffffff'});   
        
        game.load.image('sky', 'images/sky.png');
        game.load.image('L1background', 'assets/level1background.png');
        game.load.image('L2background', 'assets/level2background.png');
        game.load.image('L3background', 'assets/level3background.png');

        game.load.image('ground', 'assets/platform.png');
        game.load.image('star', 'assets/star.png');
        game.load.image('cloud', 'images/cloud1flipped.png');
        game.load.image('garlic', 'assets/garlic.png');
        game.load.image('bat', 'assets/bat.png');
        game.load.image('soundwave', 'assets/soundwave.png');

        game.load.image('pigFR1', 'assets/flying-up.png');
        game.load.image('pigFR2', 'assets/flying-down.png');

        game.load.image('pigFL1', 'assets/flying-up-mirrored.png');
        game.load.image('pigFL2', 'assets/flying-down-mirrored.png');

        game.load.image('pigR1', 'images/pigSprites/walkFeathersRight1.png');
        game.load.image('pigR2', 'images/pigSprites/walkFeathersRight2.png');

        game.load.image('pigL1', 'images/pigSprites/walkFeathersLeft1.png');
        game.load.image('pigL2', 'images/pigSprites/walkFeathersLeft2.png');

        game.load.image('levelBound', 'images/brown.png');
        game.load.image('upBound', 'images/brownhorz.png');

        // Tutorial
        game.load.image('garlicField', 'assets/garlicfield.png');
        game.load.image('truck', 'assets/truck.png');
        // game.load.image('building', 'assets/scratchBarn.jpg');
        // game.load.image('hay', 'assets/hay.png');
        game.load.image('barn', 'assets/barn.png');

    },
    
    create: function() {
        // Call the menu state
        game.state.start('menu');
    }    
};
