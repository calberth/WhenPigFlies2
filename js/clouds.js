var newCloud;

function initNewSinkingCloud(x, y, xVelocity, yVelocity) {
    newCloud = platforms.create(x, y, 'sinkingCloud');
    //newCloud.body.immovable = true;
    newCloud.body.velocity.x += xVelocity;
}

function initNewSolidCloud(x, y, xVelocity) {
    newCloud = platforms.create(x, y, 'solidCloud');
    newCloud.body.immovable = true;
    newCloud.body.velocity.x += xVelocity;
}

function initNewBackgroundCloud(x, y, xVelocity) {
    var cloudImg;
    cloudNum = game.rnd.integerInRange(1, 7);
    console.log("Cloud number: " + cloudNum);

    switch(cloudNum) {
        case 1:
            cloudImg = 'cloud1';
            break;
        case 2:
            cloudImg = 'cloud2';
            break;
        case 3:
            cloudImg = 'cloud3';
            break;
        case 4:
            cloudImg = 'cloud4';
            break;
        case 5:
            cloudImg = 'cloud5';
            break;
        case 6:
            cloudImg = 'cloud6';
            break;
        case 7:
            cloudImg = 'cloud7';
            break;
        default:
            cloudImg = 'cloud1';
    }
    
    newCloud = platforms.create(x, y, cloudImg);
    newCloud.body.immovable = true;
    newCloud.body.velocity.x += xVelocity;
}

function initNewStormCloud(x, y, xVelocity) {
	newCloud = platforms.create(x, y, 'stormCloud');
    newCloud.body.immovable = true;
    newCloud.body.velocity.x += xVelocity;
}