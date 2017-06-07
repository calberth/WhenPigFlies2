
var game = new Phaser.Game(1200, 675, Phaser.AUTO, 'gameDiv');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('tutorial', tutorialState);
game.state.add('tutorial2', tutorial2State);
//game.state.add('play', playState);
game.state.add('lose', loseState);
//game.state.add('frame2', frame2State);

game.state.start('boot');