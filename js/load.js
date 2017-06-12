var state = -1;

WebFontConfig = {
            
            google: {
                families: ['Lato']
            }
        };

var loadState = {
	
	// The preload function is another standard Phaser function that we
	// use to define and load our assets
    preload: function() {

        var loadingBar = game.add.sprite(game.world.centerX-50, game.world.centerY, 'loading');
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);

        var loadingLabel = game.add.text(game.world.centerX-150, game.world.centerY-100, 'loading...', 
                                         {font: '30px Courier', fill: '#ffffff'});   
        
        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
        // Start Screen
        game.load.image('startScreen', 'assets/StartScreen.png');

        //Backgrounds
        game.load.image('sky', 'assets/sky-morning.png');
        game.load.image('sky-morning', 'assets/sky-morning.png');
        game.load.image('L1background', 'assets/level1background.png');
        game.load.image('L2background', 'assets/level2background.png');
        game.load.image('L3background', 'assets/level3background.png');
        game.load.image('stone', 'assets/stoneBackground.png');

        game.load.image('heart', 'assets/heart.png');
        game.load.image('wings', 'assets/wings-icon.png');

        game.load.image('play', 'assets/play.png');

        game.load.image('ground', 'assets/platform.png');
        game.load.image('stone-ground', 'assets/stoneplatform.png');
        game.load.image('star', 'assets/star.png');
        // game.load.image('cloud', 'images/cloud1flipped.png');
        game.load.image('garlic', 'assets/garlic.png');
        game.load.image('garlicGrenade', 'assets/garlic_bomb.png');
        game.load.image('bat', 'assets/bat.png');
        game.load.image('soundwave', 'assets/soundwave.png');
        game.load.image('soundwave-mirrored', 'assets/soundwave-mirrored.png');
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
        game.load.image('boss', 'assets/batcula.png');

        // Tutorial
        game.load.image('garlicField', 'assets/garlicfield.png');
        game.load.image('truck', 'assets/truck.png');
        game.load.image('barn', 'assets/barn.png');
        game.load.image('barnInterior', 'assets/barninterior2.jpg');
        game.load.image('barnGround', 'assets/barnplatform.png');
        game.load.image('sack', 'assets/sack.png');

        // clouds
        game.load.image('cloud', 'images/cloud4.png');
        game.load.image('sinkingCloud', 'assets/pinkcloud.png');
        game.load.image('solidCloud', 'assets/bluecloud.png');
        game.load.image('stormCloud', 'assets/graycloud.png');
        game.load.image('lightning', 'assets/lightning.png');
        game.load.image('blast', 'assets/blast.png');

        // Cut scene
        game.load.image('rooster', 'assets/rooster.png');
        game.load.image('fade-black', 'assets/fade.png');
        game.load.audio('scene1sfx', ['assets/audio/rooster.wav', 'assets/audio/happy-music.wav']);
        game.load.audio('rooster-crow', 'assets/audio/rooster.wav');
        game.load.audio('happy-music', 'assets/audio/happy-music.wav');
        game.load.audio('explosion', 'assets/audio/blast.mp3');
        //game.load.image('bird', 'assets/bird/flying1.png');
        game.load.spritesheet('bird', 'assets/bird/birdSpriteSheet.png', 190, 232, 2);
        //game.load.spritesheet('batSheet', 'assets/batSheet.png', 64, 25, 16);
        game.load.spritesheet('batSheet', 'assets/batSheet2.png', 190, 110, 7);
        game.load.spritesheet('batculaSheet', 'assets/batcula-sheet.png', 547, 204, 4);

        // Falling cut scene
        game.load.audio('falling', 'assets/audio/falling.wav');

        // Lose screen
        game.load.audio('loseAudio', 'assets/audio/lose.wav');
        game.load.image('loseText', 'assets/deadPig1.png');
        game.load.image('deadPig', 'assets/deadPig.png');

        game.load.image('apple', 'assets/apple.png');

        // Win Screen
        game.load.image('winBird', 'assets/bird/freeBird.png');
    
    },
    
    create: function() {

        game.state.start('menu');
    }, 
};
