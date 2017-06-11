
var fallSceneState = {
    create: function() {

        initializeLevel(false, false, false, false, false);
        addfallSceneObjects();

        var playButton = this.game.add.button(475, 550, 'play', this.restart, this);
    },
    
    // The restart function calls the menu state    
    restart: function () {
        health = stamina = 100;
        if (state <= 8)
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
    },  

    update: function() {

    }
}

function addfallSceneObjects()
{
    var scene = background.create(0, 0, 'sky-morning');

    var roos = game.add.sprite(-200, 150, 'rooster');
}