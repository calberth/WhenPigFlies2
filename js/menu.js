        //Since these are global, they should persist between levels
        var player;

        var background;
        var platforms;
        var boundaries;
        var rightBound;
        var leftBound;
        var upperBound;
        var lowerBound;
        var deathBound;

        var cursors;
        var space;

        var enemy;
        var bats;
        var soundwaves;

        var stars;
        var health = 100;
        var stamina = 100;

        var garlics;
        var garlicTime = 0;

        //var direction;

        var positionx;
        var positiony; 

        /*var Direction = {
          left : 0, 
          right: 1
        }; */

        var facing = "right";

        var anim = 0;
        var animL = 0;

        var texture;

        var hasGarlic = false;
        var accessories = '';


var menuState = {
  
    create: function () {
		
		// Here we display the name of the game. When defining text, the
		// first two parameters are x and y positional values, then the
		// actual text, and then the 'font' defines the font (of course)
		// and 'fill' refers to the font color.
        var scene = game.add.sprite(0,0,'sky');

        var nameLabel = game.add.text(80, 80, 'When Pig Flies: Rise of Count Batcula',
                                    { font: '50px Arial', fill: '#000000' });

        var backstoryText = game.add.text(80, 220, 'Four score and many weeks ago, Bird taught a little pig named, Pig to fly. \n\nAngered by his actions, the evil Count Batcula from high up in the sky came down \nto kidnap and imprison Bird for the flying stunts he had Pig try. Traumatized by the hasty \nkidnapping of his dear old friend, Pig immediately took it upon himself to put his flying \nto the test and Birds kidnapping to and end. But before he can do anything rash, \nhe must first search the farm for a weapon suitable to defeat a vicious fleet of vampire bats…',
                                    { font: '25px Arial', fill: '#000000' });
        
        var playButton = this.game.add.button(475, 550, 'play', this.start, this);
    },
    
    // The start function calls the play state    
    start: function () {
        positionx = 32;
        positiony = 540; 
        texture = 'pigR1';

        state = 3;
        game.state.start('frame3'); 

    },    
};
