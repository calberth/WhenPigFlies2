function initNewSinkingCloud(x, y, xVelocity) {
    newCloud = platforms.create(x, y, 'sinkingCloud');
    //newCloud.body.immovable = true;
    newCloud.body.velocity.x += xVelocity;
}

function initNewSolidCloud(x, y, xVelocity) {
    newCloud = platforms.create(x, y, 'solidCloud');
    newCloud.body.immovable = true;
    newCloud.body.velocity.x += xVelocity;
}