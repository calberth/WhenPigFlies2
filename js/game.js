
var game = new Phaser.Game(1200, 675, Phaser.AUTO, 'gameDiv');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('frame1', frame1State);
game.state.add('frame2', frame2State);
game.state.add('frame3', frame3State);
game.state.add('frame4', frame4State);
game.state.add('lose', loseState);
game.state.add('frame2', frame2State);
game.state.add('bossLevel', bossLevelState);

game.state.start('boot');