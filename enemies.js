
function insertEnemy() {
 	player = game.add.sprite(700, 150, 'pigR1');
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);
    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

}