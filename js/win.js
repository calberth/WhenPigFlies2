var winFrameCount = 0;

var winState = {

    create: function() {	
        addLoseScreenObjects();

        var playButton = this.game.add.button(475, 550, 'play', this.restart, this);
    },
    
    // The restart function calls the menu state    
    restart: function () {
        health = stamina = 100;
        loseAudio.stop();
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

    update: function() {
        fadeIn();
        winFrameCount++;
    }	
}

function fadeIn() {
    if (winFrameCount % 10 == 0) {
        //loseAudio.volume += .01;
    }
}

function addLoseScreenObjects() {
    // loseAudio = game.add.audio('loseAudio');
    // loseAudio.play();
    // loseAudio.volume = .03;

    var scene = game.add.sprite(0,0, 'sky');

    // var ground = game.add.sprite(0, game.world.height - 300, 'ground');
    // ground.scale.setTo(4, 10);

    var winLabel = game.add.text(80, 80, 'YOU WON',
                                    {font: '50px Arial', fill: '#000000' });


    var winPig = game.add.sprite(540, game.world.height - 280, 'pigGFL1');
    winPig.anchor.setTo(0.8, 0.8);
    winPig.angle = 30;
    winPig.scale.setTo(4, 4);

    var winBird = game.add.sprite(620, 320, 'winBird');
    winBird.anchor.setTo(0.25, 0.25);
    //winBird.angle = 30;
    winBird.scale.setTo(2, 2);

    // var text = game.add.sprite(game.world.width / 2 - 50, game.world.height - 525, 'loseText');
}
