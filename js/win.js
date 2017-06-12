var winFrameCount = 0;

var winState = {

    create: function() {	
        addLoseScreenObjects();

        //var playButton = this.game.add.button(475, 550, 'play', this.restart, this);
    },
    
    // The restart function calls the menu state    
    restart: function () {
        // health = stamina = 100;
        // loseAudio.stop();
        // if (state <= 4)
        // {
        //     //state = 3;
        //     //game.state.start('frame3'); 
        //     state = 2;
        //     game.state.start('frame2'); 
        // }
        // else if (state <= 8)
        // {
        //     state = 5;
        //     game.state.start('frame5'); 
        // }
        // else if (state <= 12)
        // {
        //     state = 9;
        //     game.state.start('frame9'); 
        // }
        // else if (state <= 16)
        // {
        //     state = 13;
        //     game.state.start('frame13');        
        // }
        // else
        // {
        //     game.state.start('bossLevel');  
        // }   
    },

    update: function() {
        // fadeIn();
        // winFrameCount++;
    }	
}

function fadeIn() {
    if (winFrameCount % 10 == 0) {
        //loseAudio.volume += .01;
    }
}

function addLoseScreenObjects() {

    var scene = game.add.sprite(0,0, 'sky');

    var winText = game.add.sprite(770, 225, 'winText');


    var winPig = game.add.sprite(550, game.world.height - 280, 'winPig');
    winPig.anchor.setTo(0.8, 0.8);
    winPig.angle = 30;
    winPig.scale.setTo(1.5, 1.5);

    var winBird = game.add.sprite(630, 340, 'winBird');
    winBird.anchor.setTo(0.25, 0.25);
    winBird.scale.setTo(2, 2);
}
