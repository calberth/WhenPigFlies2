
var game = new Phaser.Game(1200, 675, Phaser.AUTO, 'gameDiv');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('frame1', frame1State);
game.state.add('frame2', frame2State);
game.state.add('frame3', frame3State);
game.state.add('frame4', frame4State);
game.state.add('frame5', frame5State);
game.state.add('frame6', frame6State);
game.state.add('frame7', frame7State);
game.state.add('frame8', frame8State);
game.state.add('frame9', frame9State);
game.state.add('frame10', frame10State);
game.state.add('frame11', frame11State);
game.state.add('frame12', frame12State);
game.state.add('frame13', frame13State);
game.state.add('frame14', frame14State);
game.state.add('frame15', frame15State);
game.state.add('frame16', frame16State);

game.state.add('lose', loseState);
game.state.add('bossLevel', bossLevelState);
game.state.start('boot');