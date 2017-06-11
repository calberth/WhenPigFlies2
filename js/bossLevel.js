var boss;
var bossAnim;

var bossIsDead;

var bossLevelState = {
    create: function() {
        initializeLevel(false, false, false, false);
        addBossLevelObjects();
    },

    update: function() {

        checkCollisions();
        movePlayer();
        checkBattle();
        updateHealthBar(health);
        updateStaminaBar(stamina);
        //updateGGBar(grenadesLeft);
        checkLose();

        bossLevelUpdate();
    }
}

function addBossLevelObjects()
{
	bossIsDead = false;
	bossHealth = 200;
	createBossBar(bossHealth);
    var scene = background.create(0,0,'stone');

    var ground = platforms.create(0, game.world.height - 64, 'stone-ground');
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(3,2);
    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    var ledge = platforms.create(400, 400, 'cloud');
    var ledge2 = platforms.create(500, 400, 'cloud');

    ledge.body.immovable = true;

    diveBatsInit();
    makeDiveBat(300, 600);
    boss = game.add.sprite(800, 200, 'boss');
    game.physics.arcade.enable(boss);
    boss.body.velocity.y = -100;
    bossAnim = 0;

}

function updateBoss() {
    bossAnim++;
    if (bossAnim % 100 == 0) {
        makeDiveBat(boss.x, boss.y);
    }

    if (boss.y >= 500) // if low, go high
        boss.body.velocity.y = -100;
    if (boss.y < 50)
        boss.body.velocity.y = 100;
    if (bossAnim % 50 == 0 && !bossIsDead) {
        createOneSoundwave(boss.x, boss.y, -400, 0, 0);
    }

    game.physics.arcade.overlap(garlics, boss, hitBoss, null, this);
    updateBossBar(bossHealth);
    //checkBossHealth();
}

function checkBossHealth() {
	if (bossHealth <= 0) {
		boss.kill();
		bossIsDead = true;
	}
}

function hitBoss(garlic, boss) {
	//garlic.kill();
	//garlics.remove(garlic);

	//This occurs due to constant overlap calls over many frames. 
	if (bossHealth > 0)
		bossHealth -= .5;
}


function bossLevelUpdate()
{
    updateDiveBats();
    updateBoss();

}