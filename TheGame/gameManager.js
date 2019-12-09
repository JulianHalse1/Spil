// Dette er vores gamemanger. Vi sætter funtionerne ind i setup/draw funtionen.

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

    wallDetection();
}