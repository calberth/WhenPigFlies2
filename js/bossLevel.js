var boss;
var bossAnim;

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
        checkLose();

        bossLevelUpdate();
    }
}

function addBossLevelObjects()
{
    var scene = background.create(0,0,'sky');

    var ground = platforms.create(0, game.world.height - 64, 'ground');
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(3,2);
    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    var ledge = platforms.create(400, 400, 'cloud');
    var ledge2 = platforms.create(500, 400, 'cloud');

    ledge.body.immovable = true;

    diveBatsInit();
    makeDiveBat(300, 600);
    boss = game.add.sprite(1000, 200, 'boss');
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
    if (bossAnim % 50 == 0) {
        createOneSoundwave(boss.x, boss.y, -400, 0);
    }
}


function bossLevelUpdate()
{
    updateDiveBats();
    updateBoss();

}