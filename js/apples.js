var apples;

function addApple(x, y) {

    if (applesPickedUp[state] == false) {
        var apple = apples.create(x, y, 'apple');
        apple.scale.setTo(.03, .03);
        console.log("apple Length: " + apples.children.length);
    }
}

function checkAppleCollisions() {
    console.log("checkin collisinos\n");
    game.physics.arcade.collide(player, apples, hitApple, null, this);
}

function hitApple(player, apple) {
    apple.kill();
    apples.remove(apple);

    applesPickedUp[state] = true;

    if (health <= 90) {
        health += 10;
    }
}