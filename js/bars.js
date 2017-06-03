var healthBar;
var staminaBar;
var healthDec = 10;
var healthText;
var staminaText;



function createHealthBar(health)
{
    var bar = game.add.bitmapData(health, 40);
    bar.ctx.beginPath();
    bar.ctx.rect(0,0,180,30);
    bar.ctx.fillStyle = '#00685e';
    bar.ctx.fill();

    healthBar = game.add.sprite(150,16, bar);
    healthText = game.add.text(16, 16, 'Health:', { fontSize: '32px', fill: '#000' });
}

function updateHealthBar(health)
{
    healthBar.width = health;
}

function createStaminaBar(stamina)
{
    var bar = game.add.bitmapData(stamina, 40);
    bar.ctx.beginPath();
    bar.ctx.rect(0,0,180,30);
    bar.ctx.fillStyle = '#ff6600';
    bar.ctx.fill();

    staminaBar = game.add.sprite(150,50, bar);
    staminaText = game.add.text(16, 50, 'Stamina:', { fontSize: '32px', fill: '#000' });
}

function updateStaminaBar(stamina)
{
    staminaBar.width = stamina;
}


    