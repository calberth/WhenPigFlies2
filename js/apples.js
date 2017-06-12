var apples;

function addApple(x, y) {
    var apple = apples.create(x, y, 'apple');
    apple.scale.setTo(.05, .05);
}

function checkAppleCollisions() {
    game.physics.arcade.collide(player, apples, hitApple, null, this);
}

function hitApple(player, apple) {
    apple.kill();
    apples.remove(apple);

    if (health <= 90) {
        health += 10;
    }
}