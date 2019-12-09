// Dette er vores gamemanger. Vi sætter funtionerne ind i setup/draw funtionen.
var cooldown = 60;


function setup(){
    drawPlayerSprite();

    enemyNow();

    createCanvas(windowWidth,windowHeight);

    walls();
}

function draw(){
    background(50)

    drawSprites();

    playerOneMovement();

    playerTwoMovement();

    enemyMovement();

    enemyAttack();

    death();

    cooldown = cooldown - 1;

}
