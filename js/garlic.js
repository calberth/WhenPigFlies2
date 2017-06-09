
function dropGarlic() {
    var garlic = garlics.create(player.x + 20, player.y + 25, 'garlic');
    game.physics.arcade.enable(garlic);
    garlic.enableBody = true;
    garlic.body.gravity.y = 200;
    garlic.body.bounce.y = 1;
    garlic.body.velocity.x = player.body.velocity.x;
}

function throwGrenade() {
	if (grenadesLeft > 0 ) {
		grenadesLeft--;

		var garlic = garlics.create(player.x + 20, player.y + 25, 'garlicGrenade');

		game.physics.arcade.enable(garlic);
	    garlic.enableBody = true;
	    garlic.body.gravity.y = 200;
	    garlic.body.bounce.y = 1;
	    garlic.body.velocity.y = -250;
	    garlic.body.velocity.x = player.body.velocity.x;
	}
}

//TODO call explode on contact
function explode(grenade) {
	grenade.kill();
	garlics.remove(grenade);
	game.add.sprite('blast');	
}