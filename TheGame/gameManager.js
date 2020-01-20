// Dette er vores gamemanger. Vi sætter funtionerne ind i setup/draw funtionen.
var cooldown = 60;


function setup(){
    drawPlayerSprite();

    createCanvas(windowWidth,windowHeight);

    walls();

    enemySpawnTimer();

    healthbar();
}

function draw(){
    background(50)

    drawSprites();

    playerOneMovement();

    playerTwoMovement();

    cooldown = cooldown - 1;

    wallDetection();

    enemySpawnFor();
    
    healthbarGoingDown();

    ply1Attack();
    //ply1AttackCollide();

    ply2Attack();
    //ply2AttackCollide();
}
