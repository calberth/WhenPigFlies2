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