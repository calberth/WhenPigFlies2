

function dropGarlic() {
    var garlic = garlics.create(player.x, player.y + 20, 'garlic');
    game.physics.arcade.enable(garlic);
    garlic.enableBody = true;
    garlic.body.gravity.y = 200;
    garlic.body.bounce.y = 1;
    garlic.body.velocity.x = player.body.velocity.x;

    
}