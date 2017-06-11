var rooster, tweenRooster, roosterLeave;
var roosterSound, happyMusic;
var sfx;
var pig, bird;

var scene1State = {
    create: function() {
         
        initializeLevel(false, false, false, false);
        addScene1Objects();
        
    },

    update: function() {
          //signalRooster();
//        checkCollisions();
//        movePlayer();
//        checkBattle();
//        updateHealthBar(health);
//        updateStaminaBar(stamina);
//        checkLose();
        //scene1Update();
    },

}


function addScene1Objects()
{
    var scene = background.create(0,0,'sky-morning');

    //var text = this.game.add.text(425, 16, 'Tutorial2', { fontSize: '32px', fill: '#000' });

    var ground = platforms.create(0, this.game.world.height - 64, 'ground');
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(3,2);
    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    // var ledge = platforms.create(400, 400, 'cloud');

    // ledge.body.immovable = true;

    var field = game.add.sprite(0, 519, 'garlicField');
    //field.body.immovable = true;

    

    var barn = game.add.sprite(0, 250, 'barn');
    barn.scale.setTo(1.2, 1.2);
    
    rooster = game.add.sprite(-200, 150, 'rooster');
    rooster.scale.setTo(0.8, 0.8);
    
    //game.camera.flash(0x000000, 2000, true);
    //Phaser.Camera.flash(0xff0000, 500);
    //game.camera.flash(0xff0000, 500);
    //game.camera.onFlashComplete.add(this.flashComplete,this);
    //startScene();
    
    var fade = game.add.sprite(0, 0, 'fade-black');
    game.add.tween(fade).to({alpha: 0}, 2000, "Linear", true);
    
    setUpAudio();
    startScene();
    

}
function startScene() {
    tweenRooster = game.add.tween(rooster).to({x: 30, y: 200}, 3000, Phaser.Easing.Quadratic.Out, true);
    tweenRooster.onComplete.add(roosterActions, this);
    //fx.play('rooster-crow');
    
}

function enterActors() {
    var bird = game.add.sprite(20, 500, 'bird');
    var flying = bird.animations.add('flying');
    bird.scale.setTo(0.5, 0.5);
    bird.animations.play('flying', 10, true);
    
    var pig = game.add.sprite(20, 600, 'pigR1');
    
    game.add.tween(bird).to({x: 600}, 10000, null, true);
    game.add.tween(pig).to({x: 600}, 10000, null, true);
    
}

function roosterActions() {
    //roosterSound.play();
    roosterLeave = game.add.tween(rooster).to({x: -200, y: 150}, 3000, Phaser.Easing.Quadratic.Out);
    roosterLeave.onComplete.add(enterActors, this);
    roosterLeave.delay(3000, -1);
    roosterLeave.start();
    enterEvilActors();
}

function enterEvilActors() {
    var group = game.add.group();
    
    // Couldn't figure out how to make the group thing work soooooo
    var bat = game.add.sprite(game.rnd.integerInRange(900, 1100), game.rnd.integerInRange(100, 300), 'batSheet2');
    bat.animations.add('flying');
    bat.animations.play('flying', 10, true);
    
    var bat2 = game.add.sprite(game.rnd.integerInRange(900, 1100), game.rnd.integerInRange(100, 300), 'batSheet2');
    bat2.animations.add('flying');
    bat2.animations.play('flying', 9, true);
    
    var bat3 = game.add.sprite(game.rnd.integerInRange(900, 1100), game.rnd.integerInRange(100, 300), 'batSheet2');
    bat3.animations.add('flying');
    bat3.animations.play('flying', 8, true);
    
    var bat4 = game.add.sprite(game.rnd.integerInRange(900, 1100), game.rnd.integerInRange(100, 300), 'batSheet2');
    bat4.animations.add('flying');
    bat4.animations.play('flying', 8, true);
    
    
    //var boss = game.add.sprite(800, 200, 'boss');
    
    var boss = this.game.add.sprite(800, 200, 'boss');
    this.game.time.events.loop(2000, function() {  
        this.game.add.tween(boss).to({x: this.game.world.randomX, 
                                         y: this.game.world.randomY}, 
                                        1750, Phaser.Easing.Quadratic.InOut, true);
    }, this);
    
    
    
}
function setUpAudio() {
    roosterSound = game.add.audio('rooster-crow');
    happyMusic = game.add.audio('happy-music');
    
}