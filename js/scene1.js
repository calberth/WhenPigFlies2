var rooster, tweenRooster, roosterLeave;
var roosterSound, happyMusic, dracula;
var sfx;
var pig, bird, boss;
var endBirdBubbleX, endBirdBubbleY, endPigBubbleX, endPigBubbleY;

var scene1State = {
    create: function() {
        background = game.add.group();

        platforms = game.add.group();
        platforms.enableBody = true;
        
        cursors = game.input.keyboard.createCursorKeys();
        space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        control = game.input.keyboard.addKey(Phaser.Keyboard.CONTROL);
        //initializeLevel(false, false, false, false, false);
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
        backgroundClouds();
    },

}


function addScene1Objects()
{
    var scene = background.create(0,0,'sky-morning');
    cloudTimer = 0;

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
    



    
    var fade = game.add.sprite(0, 0, 'fade-black');
    game.add.tween(fade).to({alpha: 0}, 4000, "Linear", true);
    
    setUpAudio();
    startScene();
    

}
function startScene() {
    tweenRooster = game.add.tween(rooster).to({x: 30, y: 200}, 3000, Phaser.Easing.Quadratic.Out, true);
    tweenRooster.onComplete.add(roosterActions, this);
    //fx.play('rooster-crow');
    //roosterActions();
}

function enterActors() {
    var birdY = 450;
    var pigY = 550;
    bird = game.add.sprite(20, birdY, 'bird');
    var flying = bird.animations.add('flying');
    bird.scale.setTo(0.3, 0.3);
    bird.animations.play('flying', 10, true);
    var startingPigX = 75;
    var startingBirdX = 20;
    var threeSecondX = 83;
    
    
    pig = game.add.sprite(startingPigX, pigY, 'pigR1');
    
    
    //Add pig bubble 1 
    var pBubble1 = game.add.sprite(startingPigX + 50, pigY-150, 'pigS1');
    //pig1
    tweeen = game.add.tween(pBubble1).to({x: startingPigX+ 40 + 83}, 3000, null, true);
    game.add.tween(pig).to({x: startingPigX + 83}, 3000, null, true);
    game.add.tween(bird).to({x: startingBirdX + 83}, 3000, null, true);
    tweeen.onComplete.add(function () {
        // ADD BIRD DIALOG 1
        var bBubble = game.add.sprite(bird.x + 50, birdY-150, 'birdS1');
        pBubble1.visible = false;
        game.add.tween(bird).to({x: bird.x + 193}, 7000, null, true);
        game.add.tween(pig).to({x: pig.x + 193}, 7000, null, true);
        tweeen2 = game.add.tween(bBubble).to({x: bBubble.x + 193}, 7000, null, true);
        tweeen2.onComplete.add(function () {
            // ADD PIG DIALOG 2
            bBubble.visible = false;
            var pBubble2 = game.add.sprite(pig.x + 50, pigY-100, 'pigS2');
            
            game.add.tween(bird).to({x: bird.x + 83}, 3000, null, true);
            game.add.tween(pig).to({x: pig.x + 83}, 3000, null, true);
            
            tweeen3 = game.add.tween(pBubble2).to({x: pBubble2.x + 83}, 3000, null, true);
            tweeen3.onComplete.add(function () {
                pBubble2.visible = false;
                var bBubble2 = game.add.sprite(bird.x + 50, birdY-100, 'birdS2');
                game.add.tween(bird).to({x: bird.x + 83}, 3000, null, true);
                game.add.tween(pig).to({x: pig.x + 83}, 3000, null, true);
                tweeen4 = game.add.tween(bBubble2).to({x: bBubble2.x + 83}, 3000, null, true);
                tweeen4.onComplete.add(function () {
                    bBubble2.visible = false;
                    endPigBubbleX = pBubble2.x;
                    endPigBubbleY = pBubble2.y;
                    endBirdBubbleX = bBubble2.x;
                    endBirdBubbleY = bBubble2.y;
                    enterEvilActors();
                }, this);
                
            }, this);
        }, this);
    }, this);
    
    /*tweeen = game.add.tween(pBubble1).to({x: startingPigX+83}, 3000, null, true);
    tweeen.onComplete.add(function () {
        console.log("blarhadfknl");
    }, this);*/
    
    
    //game.add.tween(bird).to({x: 600}, 16000, null, true);
    //game.add.tween(pig).to({x: 600}, 16000, null, true);
    
}

function roosterActions() {
    roosterSound.play();
    roosterSound.onStop.add(function() {
        rooster.anchor.setTo(.5,.5);
        rooster.scale.x *= -1;
        happyMusic.play();
        enterActors();
    }, this);
    
    roosterLeave = game.add.tween(rooster).to({x: -100, y: 150}, 3000, Phaser.Easing.Quadratic.Out);
    //roosterLeave.onComplete.add(enterActors, this);
    roosterLeave.delay(3000, -1);
    roosterLeave.start();
    //enterEvilActors();
}

function enterEvilActors() {
    var group = game.add.group();
    happyMusic.stop();
    dracula.play();
    batX1 = game.rnd.integerInRange(900, 1100);
    batY1 = game.rnd.integerInRange(100, 300);
    batX2 = game.rnd.integerInRange(900, 1100);
    batY2 = game.rnd.integerInRange(100, 300);
    batX3 = game.rnd.integerInRange(900, 1100);
    batY3 = game.rnd.integerInRange(100, 300);
    batX4 = game.rnd.integerInRange(900, 1100);
    batY4 = game.rnd.integerInRange(100, 300);
    
    // Couldn't figure out how to make the group thing work soooooo
    var bat = game.add.sprite(batX1+200, batY1, 'batSheet');
    bat.animations.add('flying');
    bat.animations.play('flying', 10, true);
    
    var bat2 = game.add.sprite(batX2+200, batY2, 'batSheet');
    bat2.animations.add('flying');
    bat2.animations.play('flying', 9, true);
    
    var bat3 = game.add.sprite(batX3+200, batY3, 'batSheet');
    bat3.animations.add('flying');
    bat3.animations.play('flying', 8, true);
    
    var bat4 = game.add.sprite(batX4+200, batY4, 'batSheet');
    bat4.animations.add('flying');
    bat4.animations.play('flying', 8, true);
    
    
    //var boss = game.add.sprite(800, 200, 'boss');
    
    boss = this.game.add.sprite(1400, 200, 'batculaSheet');
    
    boss.animations.add('flyingBoss');
    boss.animations.play('flyingBoss', 7, true);
    boss.scale.setTo(0.5, 0.5);
//    boss.animations.add('flyingBoss');
//    boss.animations.play('flyingBoss', 7, true);
//    this.game.time.events.loop(2000, function() {  
//        this.game.add.tween(boss).to({x: this.game.world.randomX, 
//                                         y: this.game.world.randomY}, 
//                                        1750, Phaser.Easing.Quadratic.InOut, true);
//    }, this);
    //console.log("BOss: " + boss.x);
    
    tweeen = game.add.tween(boss).to({x: 800}, 2000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(bat).to({x: batX1}, 2000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(bat2).to({x: batX2}, 2000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(bat3).to({x: batX3}, 2000, Phaser.Easing.Quadratic.Out, true);
    game.add.tween(bat4).to({x: batX4}, 2000, Phaser.Easing.Quadratic.Out, true);
    
    
    tweeen.onComplete.add(function () {
        var bossBubble1 = game.add.sprite(boss.x - 250, 75, 'batculaS1');
    game.time.events.add(Phaser.Timer.SECOND * 7, function() {
        bossBubble1.visible = false;
        var bBubble3 = game.add.sprite(endBirdBubbleX + 20, endBirdBubbleY - 30, 'birdS3');
        game.time.events.add(Phaser.Timer.SECOND * 9, function() {
            bBubble3.visible = false;
            var bossBubble2 = game.add.sprite(bossBubble1.x-10, bossBubble1.y, 'batculaS2');
            game.time.events.add(Phaser.Timer.SECOND * 7, function() {
                bossBubble2.visible = false;
                var bossBubble3 = game.add.sprite(bossBubble2.x+30, bossBubble2.y, 'batculaS3');
                game.time.events.add(Phaser.Timer.SECOND * 3, function() {
                    bossBubble3.visibile = false;
                    var bossBubble4 = game.add.sprite(bossBubble3.x+30, bossBubble3.y, 'batculaS4');
                    tweeeen = game.add.tween(bat).to({x: bird.x-50, y: bird.y-160}, 2000, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(bat2).to({x: bird.x-50, y: bird.y-160+20}, 2000, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(bat3).to({x: bird.x-60, y: bird.y+10-160}, 2000, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(bat4).to({x: bird.x-60, y: bird.y-10-160}, 2000, Phaser.Easing.Quadratic.Out, true);
                    bossBubble3.visible = false;
                    tweeeen.onComplete.add(function() {
                        var capturedBird = game.add.sprite(bird.x, bird.y-70, 'capturedBird');
                        bird.visible = false;
                        
                        bossBubble4.visible = false;
                        game.add.tween(boss).to({x: boss.x + 400, y: boss.y}, 2000, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(bat).to({x: batX1+400, y: batY1}, 2000, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(bat2).to({x: batX2+400, y: batY2}, 2000, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(bat3).to({x: batX3+400, y: batY3}, 2000, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(bat4).to({x: batX4+400, y: batY4}, 2000, Phaser.Easing.Quadratic.Out, true);
                        twn = game.add.tween(capturedBird).to({x: batX3+200, y: batY3}, 2000, Phaser.Easing.Quadratic.Out, true);
                        
                        var pBubble4 = game.add.sprite(endPigBubbleX+100, endPigBubbleY-70, 'pigS4');
                        game.time.events.add(Phaser.Timer.SECOND * 7, function() {
                            game.state.start('frame3');
                        });
                        
                    });
                
                });
                
            });
        });
    }, this);
    });
    
    
    
    //tweeen1 = game.add.tween(bossBubble1).to({x: startingPigX+ 40 + 83}, 3000, null, true);
    
    
    
}

function backgroundClouds() {

    // middle level
    if (cloudTimer % game.rnd.integerInRange(900, 2000) == 0) { 
        initNewBackgroundCloud(0, game.world.height - 400, 90); // middle
    }
    // lower level
    if (cloudTimer % game.rnd.integerInRange(900, 2000) == 0) { 
        
        initNewBackgroundCloud(game.world.width, 100, -40); // lower
    }
    cloudTimer++;
    
}


function setUpAudio() {
    roosterSound = game.add.audio('rooster-crow');
    happyMusic = game.add.audio('happy-music');
    dracula = game.add.audio('dracula');
    
}
