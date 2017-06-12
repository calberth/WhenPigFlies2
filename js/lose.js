var loseFrameCount = 0;

var loseState = {

    create: function() {	
        setLoseBackground();
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
        loseFrameCount++;
    }	
}

function fadeIn() {
    if (loseFrameCount % 10 == 0 && bossIsDead == false) {
        loseAudio.volume += .01;
    }
}

function setLoseBackground() {
    var loseBG;
    if (state <= 8)
    {
        loseBG = 'L1background';
    }
    else if (state <= 12)
    {
        loseBG = 'L2background';
    }
    else if (state <= 16)
    {
        loseBG = 'L3background';      
    }
    var scene = game.add.sprite(0,0, loseBG);
}

function addLoseScreenObjects() {
    loseAudio = game.add.audio('loseAudio');
    loseAudio.play();
    loseAudio.volume = 0;

    var ground = game.add.sprite(0, game.world.height - 300, 'ground');
    ground.scale.setTo(4, 10);

    // var winLabel = game.add.text(80, 80, 'YOU DIED',
    //                                 {font: '50px Arial', fill: '#000000' });


    var deadPig = game.add.sprite(game.world.width / 2, game.world.height - 270, 'deadPig');
    deadPig.anchor.setTo(0.5, 0.5);
    deadPig.angle = 190;
    deadPig.scale.setTo(2, 2);

    var text = game.add.sprite(game.world.width / 2 - 50, game.world.height - 525, 'loseText');
}
