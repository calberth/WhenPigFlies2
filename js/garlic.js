var grenades;
var blasts;
var sittingGrenades;

function dropGarlic() {
	if (garlics.children.length < 5) {
	    var garlic = garlics.create(player.x + 20, player.y + 25, 'garlic');
	    game.physics.arcade.enable(garlic);
	    garlic.enableBody = true;
	    garlic.body.gravity.y = 200;
	    garlic.body.bounce.y = 1;
	    garlic.body.velocity.x = player.body.velocity.x;
	}
}

function throwGrenade() {
	if (grenadesLeft > 0 ) {
		grenadesLeft--;

		var garlic = grenades.create(player.x + 20, player.y + 25, 'garlicGrenade');

		game.physics.arcade.enable(garlic);
	    garlic.enableBody = true;
	    garlic.body.gravity.y = 300;
	    garlic.body.bounce.y = 1;
	    garlic.body.velocity.y = -200;
	    garlic.body.velocity.x = player.body.velocity.x;
	}
}

//TODO call explode on contact
function explode(grenade, bat) {
	//grenade.kill();
	//garlics.remove(grenade);
	bat.kill();
	bats.remove(bat);
	diveBats.remove(bat);
	var blast = blasts.create(bat.x, bat.y, 'blast');	
	blast.scale.setTo(.3, .3);
	
	explosion.play();

}

function nonBatExplode(grenade) {
	var blast = blasts.create(grenade.x, grenade.y, 'blast');	
	grenade.kill();
	blast.scale.setTo(.3, .3);
	
	explosion.play();
}

function updateBlastAnim() {
	if (blasts.children.length > 0) {
		blastNum++;

		for (var i = 0; i < blasts.children.length; i++) {
			game.physics.arcade.overlap(blasts.children[i], bats, collectBat, null, this);
    		game.physics.arcade.overlap(blasts.children[i], diveBats, killDBat, null, this);	

    		if (blastNum % 20 == 0) {
    			blasts.children[i].kill();
				blastNum = 0;
			}
		}	
	}
}

function killGarlic(bound, garlicv) {
	console.log("garlic killed");
	garlicv.kill();
	garlics.remove(garlicv);
}

function addGrenade(x, y) {
	if (grenadesPickedUp[state] == false) {
		sittingGrenades.create(x, y, 'garlicGrenade');
	}
}

function checkSittingGrenades() {
	game.physics.arcade.collide(player, sittingGrenades, pickupGrenade, null, this);
}

function pickupGrenade(player, grenade) {
	grenade.kill();
	sittingGrenades.remove(grenade);
	grenadesPickedUp[state] = true;
	grenadesLeft++;
}
