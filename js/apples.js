var apples;

function addApple(x, y) {
    console.log("attempt to add apple\n");
    if (applesPickedUp == false) {
        var apple = apples.create(x, y, 'apple');
        apple.scale.setTo(.05, .05);
    }
}

function checkAppleCollisions() {
    game.physics.arcade.collide(player, apples, hitApple, null, this);
}

function hitApple(player, apple) {
    apple.kill();
    apples.remove(apple);

    applesPickedUp = true;

    if (health <= 90) {
        health += 10;
    }
}