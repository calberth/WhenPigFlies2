var diveBats; 
var diveTimer = 0;

function diveBatsInit() {
	diveBats = game.add.group();
	diveBats.enableBody = true;
}

function makeDiveBat(x, y) {
	var newBat = diveBats.create(x, y, 'bat');
	newBat.body.gravity.y = 50;
	newBat.body.velocity.x = 50;
	newBat.body.collideWorldBounds = true;
}

function findDiveX(batX) {
	if (batX > player.x) {
		return -100;
	}
	else
		return 100;

}

function killDBat(garlics, bat) {
	bat.kill();
	diveBats.remove(bat);
}

function updateDiveBats() {

	for (var i = 0; i < diveBats.children.length; i++) {
			if (diveBats.children[i].y <= 100) { 
				diveBats.children[i].body.velocity.y = 100;
				diveBats.children[i].body.gravity.y =  50;
				diveBats.children[i].body.velocity.x = findDiveX(diveBats.children[i].x);
	    	}
	    	if (diveBats.children[i].y > 500) { 
	    		diveBats.children[i].body.velocity.y = -100;
	    		diveBats.children[i].body.gravity.y =  -50;
	    		diveBats.children[i].body.velocity.x = findDiveX(diveBats.children[i].x);
	    	}
	}
	
}
