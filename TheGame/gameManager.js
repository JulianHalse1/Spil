// Dette er vores gamemanger. Vi sætter funtionerne ind i setup/draw funtionen.



function setup(){
    drawPlayerSprite();

    createCanvas(windowWidth,windowHeight);

    walls();

    enemySpawnTimer();

    healthbar();
    
}

function draw(){

    background(50)

    playerOneMovement();

    playerTwoMovement();

    ply1Attack();

    enemyMovement();

    enemyAttack();
    
    death();

    cooldown = cooldown - 1;

    wallDetection();

    enemySpawnFor();

    healthbarGoingDown();
    drawSprites();

}
