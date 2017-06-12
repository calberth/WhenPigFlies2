var healthBar;
var staminaBar;
var healthDec = 10;
var icons;

var bossHealthbar;
var bossHealthText;
var bossHealth;

var grenadesLeft = 0;
var grenadesText;

function createGarlicGrenadesBar() {

    grenadesText = game.add.text(60, 93, grenadesLeft, { fontSize: '28px', fill: '#00992b' });
	
    var grenadeIcon = icons.create(18, 92, 'garlicGrenade');
    grenadeIcon.scale.setTo(.8, .8);

}

function updateGGBar() {
    
	grenadesText.kill();
    grenadesText = game.add.text(60, 93, grenadesLeft, { fontSize: '28px', fill: '#00992b' });

}


function createBossBar(bossHealth)
{
    var bbar = game.add.bitmapData(100, 100);
    bbar.ctx.beginPath();
    bbar.ctx.rect(0,0,180,30);
    bbar.ctx.fillStyle = '#464646';
    bbar.ctx.fill();

    var bar = game.add.bitmapData(bossHealth, 100);
    bar.ctx.beginPath();
    bar.ctx.rect(0,0,92,22);
    bar.ctx.fillStyle = '#e60000';
    bar.ctx.fill();

    var batculaIcon = icons.create(1000, 16, 'boss');
    batculaIcon.scale.setTo(.25, .25);

    var backBar = game.add.sprite(1090,16, bbar);
    bossHealthBar = game.add.sprite(1094, 20, bar);
}

function createHealthBar(health)
{
    var bbar = game.add.bitmapData(100, 40);
    bbar.ctx.beginPath();
    bbar.ctx.rect(0,0,180,30);
    bbar.ctx.fillStyle = '#464646';
    bbar.ctx.fill();

    var bar = game.add.bitmapData(health, 40);
    bar.ctx.beginPath();
    bar.ctx.rect(0,0,92,22);
    bar.ctx.fillStyle = '#e60000';
    bar.ctx.fill();

    icons = game.add.group();
    var heartIcon = icons.create(16, 16, 'heart');
    heartIcon.scale.setTo(.015, .015);

    var backBar = game.add.sprite(60, 16, bbar);


    healthBar = game.add.sprite(64, 20, bar);
}

function updateHealthBar(health)
{
    healthBar.width = health;
}

function createStaminaBar(stamina)
{
    var bbar = game.add.bitmapData(100, 40);
    bbar.ctx.beginPath();
    bbar.ctx.rect(0,0,180,30);
    bbar.ctx.fillStyle = '#464646';
    bbar.ctx.fill();

    var bar = game.add.bitmapData(stamina, 40);
    bar.ctx.beginPath();
    bar.ctx.rect(0,0,92,22);
    bar.ctx.fillStyle = '#cbe4ef';
    bar.ctx.fill();

    var wingIcon = icons.create(8, 50, 'wings');
    wingIcon.scale.setTo(.4, .4);

    var backBar = game.add.sprite(60, 54, bbar);

    staminaBar = game.add.sprite(64, 58, bar);
}

function updateStaminaBar(stamina)
{
    staminaBar.width = stamina;
}

function updateBossBar(bossHealth)
{
    bossHealthBar.width = bossHealth;
}


    