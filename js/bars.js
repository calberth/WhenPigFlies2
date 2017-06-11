var healthBar;
var staminaBar;
var healthDec = 10;
var icons;

var bossHealthbar;
var bossHealthText;
var bossHealth;

var grenadesLeft;
var grenadesText;

function createGarlicGrenadesBar() {
	grenadesText = game.add.text(16, 100, 'Grenades: 0', { fontSize: '32px', fill: '#F00' });
	grenadesLeft = 0;

}

function updateGGBar() {
	grenadesText.text = 'Grenades: ' + grenadesLeft;
}


function createBossBar(bossHealth)
{
    var bar = game.add.bitmapData(bossHealth, 100);
    bar.ctx.beginPath();
    bar.ctx.rect(0,0,200,30);
    bar.ctx.fillStyle = '#F00';
    bar.ctx.fill();

    bossHealthBar = game.add.sprite(650,16, bar);
    bossHealthText = game.add.text(460, 16, 'Count Batcula:', { fontSize: '32px', fill: '#000' });
}

function createHealthBar(health)
{
    var bbar = game.add.bitmapData(health, 40);
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
    var bbar = game.add.bitmapData(health, 40);
    bbar.ctx.beginPath();
    bbar.ctx.rect(0,0,180,30);
    bbar.ctx.fillStyle = '#464646';
    bbar.ctx.fill();

    var bar = game.add.bitmapData(health, 40);
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


    