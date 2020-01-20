// Dette er vores gamemanger. Vi sætter funtionerne ind i setup/draw funtionen.
var cooldown = 60;


function setup(){
    drawPlayerSprite();

    createCanvas(windowWidth,windowHeight);

    walls();

    enemySpawnTimer();
}

function draw(){
    background(50)

    drawSprites();

    playerOneMovement();

    playerTwoMovement();

    drawPlayerOneAttack();

    cooldown = cooldown - 1;

    wallDetection();

    enemySpawnFor();
}
