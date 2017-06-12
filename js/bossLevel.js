var boss;
var bossAnim;

var bossIsDead;

// DELETE ME
var bossTimer = 0;

var bossLevelState = {
    create: function() {
        initializeLevel(true, false, false, false, false);
        addBossLevelObjects();
        grenadesLeft = 5; //For testing GG
    },

    update: function() {

        levelUpdate();

        bossLevelUpdate();

        // DELETE ME
        if (bossTimer >= 10) {
            bossIsDead = true;
            //var text = game.add.text(425, 16, 'YOU WON!!!!', { fontSize: '32px', fill: '#000' });
        }
        bossTimer++;
    }
}

function checkWin() {
    if (bossIsDead == true) {
        // DELETE ME 
        //var text = game.add.text(425, 16, 'YOU WON!!!!', { fontSize: '32px', fill: '#000' });
        var end = game.add.text(0, 0, 'endWin');
        //game.state.start('win');
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

    diveBatsInit();
    makeDiveBat(300, 600);

    boss = game.add.sprite(800, 200, 'batculaSheet');

    boss.animations.add('flyingBoss');
    boss.animations.play('flyingBoss', 7, true);
    boss.scale.setTo(0.5, 0.5);
 
    //game.physics.arcade.enable(boss);
    //boss.body.velocity.y = -100;
    //boss.body.collideWorldBounds = true;
    bossAnim = 0;

    explosion = game.add.audio('explosion');
    boss.animations.add('flyingBoss');

    this.game.time.events.loop(2000, function() {  
        this.game.add.tween(boss).to({x: this.game.world.randomX, 
                                         y: this.game.world.randomY}, 
                                        1750, Phaser.Easing.Quadratic.InOut, true);
    }, this);
}

function updateBoss() {
   
    boss.animations.play('flyingBoss', 7, true);  

    bossAnim++;
    if (bossAnim % 150 == 0) {
        makeDiveBat(boss.x, boss.y);
    }

    /*if (boss.y >= 500) // if low, go high
        boss.body.velocity.y = -100;
    if (boss.y < 50)
        boss.body.velocity.y = 100;*/
    if (bossAnim % 80 == 0) {
        createOneSoundwave(boss.x, boss.y, -400, 0, 0);
    }

    game.physics.arcade.collide(boss, garlics, hitBoss, null, this);
    game.physics.arcade.collide(boss, grenades, grenadeBoss, null, this);
    updateBossBar(bossHealth);
    checkBossHealth();
} 

function checkBossHealth() {
    if (bossHealth <= 0) {
        boss.kill();
        bossIsDead = true;
        //TODO change to win state
        // var text = game.add.text(425, 16, 'YOU WON!!!!', { fontSize: '32px', fill: '#000' });
    }
}

function grenadeBoss(boss, grenade) {
    nonBatExplode(grenade);
    grenade.kill();
    grenades.remove(grenade);


    if (bossHealth > 0)
        bossHealth -= 20;

}

function hitBoss(boss, garlic) {
    garlic.kill();
    garlics.remove(garlic);

    //This occurs due to constant overlap calls over many frames. 
    if (bossHealth > 0)
        bossHealth -= 5;
}


function bossLevelUpdate()
{
    updateDiveBats();    
    
    checkSoundwaves();

    if (bossIsDead == false)
        updateBoss();
}