var loadState = {
	
	// The preload function is another standard Phaser function that we
	// use to define and load our assets
    preload: function() {

        var loadingLabel = game.add.text(80, 150, 'loading assets...', 
                                         {font: '30px Courier', fill: '#ffffff'});   
        
        //Backgrounds
        game.load.image('sky', 'images/sky.png');
        game.load.image('L1background', 'assets/level1background.png');
        game.load.image('L2background', 'assets/level2background.png');
        game.load.image('L3background', 'assets/level3background.png');
        game.load.image('stone', 'assets/stoneBackground.png');

        game.load.image('ground', 'assets/platform.png');
        game.load.image('stone-ground', 'assets/stoneplatform.png');
        game.load.image('star', 'assets/star.png');
        game.load.image('cloud', 'images/cloud1flipped.png');
        game.load.image('garlic', 'assets/garlic.png');
        game.load.image('bat', 'assets/bat.png');
        game.load.image('soundwave', 'assets/soundwave.png');
        game.load.image('soundwaveL', 'assets/soundwaveL.png');

        game.load.image('pigFR1', 'assets/flying-up.png');
        game.load.image('pigFR2', 'assets/flying-down.png');

        game.load.image('pigFL1', 'assets/flying-up-mirrored.png');
        game.load.image('pigFL2', 'assets/flying-down-mirrored.png');

        game.load.image('pigR1', 'images/pigSprites/walkFeathersRight1.png');
        game.load.image('pigR2', 'images/pigSprites/walkFeathersRight2.png');

        game.load.image('pigL1', 'images/pigSprites/walkFeathersLeft1.png');
        game.load.image('pigL2', 'images/pigSprites/walkFeathersLeft2.png');

        // with garlic belt
        game.load.image('pigGFR1', 'assets/garlicPigSprites/GARLICflying-up.png');
        game.load.image('pigGFR2', 'assets/garlicPigSprites/GARLICflying-down.png');

        game.load.image('pigGFL1', 'assets/garlicPigSprites/GARLICflying-up-mirrored.png');
        game.load.image('pigGFL2', 'assets/garlicPigSprites/GARLICflying-down-mirrored.png');

        game.load.image('pigGR1', 'assets/garlicPigSprites/GARLICwalkFeathersRight1.png');
        game.load.image('pigGR2', 'assets/garlicPigSprites/GARLICwalkFeathersRight2.png');

        game.load.image('pigGL1', 'assets/garlicPigSprites/GARLICwalkFeathersLeft1.png');
        game.load.image('pigGL2', 'assets/garlicPigSprites/GARLICwalkFeathersLeft2.png');

        game.load.image('levelBound', 'images/brown.png');
        game.load.image('upBound', 'images/brownhorz.png');
        game.load.image('boss', 'images/boss/batcula_standin.png');

        // Tutorial
        game.load.image('garlicField', 'assets/garlicfield.png');
        game.load.image('truck', 'assets/truck.png');
        game.load.image('barn', 'assets/barn.png');
        game.load.image('barnInterior', 'assets/barninterior.png');
        game.load.image('barnGround', 'assets/barnplatform.png');
        game.load.image('sack', 'assets/sack.png');

        // clouds
        game.load.image('sinkingCloud', 'assets/pinkcloud.png');
        game.load.image('solidCloud', 'assets/bluecloud.png');
        game.load.image('stormCloud', 'assets/graycloud.png');
        game.load.image('lightning', 'assets/lightning.png');
        

    },
    
    create: function() {
        // Call the menu state
        game.state.start('menu');
        game.state.start('frame16');
    }    
};
