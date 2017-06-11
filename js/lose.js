var loseState = {

    create: function() {	
		
    	var scene = game.add.sprite(0,0,'sky');

        var winLabel = game.add.text(80, 80, 'YOU DIED',
    								{font: '50px Arial', fill: '#000000' });

        var playButton = this.game.add.button(475, 550, 'play', this.restart, this);
    },
    
    // The restart function calls the menu state    
    restart: function () {
        health = stamina = 100;
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
}
