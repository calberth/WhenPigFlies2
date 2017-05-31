

function dropGarlic() {
    var garlic = garlics.create(player.x, player.y, 'garlic');
    game.physics.arcade.enable(garlic);
    garlic.enableBody = true;
    garlic.body.gravity.y = 200;
    garlic.body.bounce.y = 1;
}
