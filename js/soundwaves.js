var bats;
var waveTimer = 0;


function createSoundwaves(bats) {
	for (var i = 0; i < bats.children.length; i++) {
		var rand = Math.random() * 10;
		if (rand >=5) { //50% chance of bat firing
			var soundwave = soundwaves.create(bats.children[i].x, bats.children[i].y - 30, 'soundwave');
    		soundwave.body.gravity.y = Math.floor(Math.random() * -1 *(0 + 100)) - 50; 
    	}
	}
}

// Shoot waves up instead of down
function createSoundwavesUp(bats) {
	for (var i = 0; i < bats.children.length; i++) {
		var rand = Math.random() * 10;
		if (rand >=5) { //50% chance of bat firing
			var soundwave = soundwaves.create(bats.children[i].x, bats.children[i].y - 30, 'soundwave');
    		soundwave.body.gravity.y = game.rnd.integerInRange(5, 100); 
    	}
	}
}

//TODO use velocity values to determine rotation
function createOneSoundwave(xPos, yPos, xVel, yVel, rotation) {
	//use left rotation
	if (rotation == 0)
		var soundwave = soundwaves.create(xPos, yPos, 'soundwaveL');
	else 
		var soundwave = soundwaves.create(xPos, yPos, 'soundwave');
	soundwave.body.velocity.y = yVel;
	soundwave.body.velocity.x = xVel;
}