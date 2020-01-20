// Dette er vores gamemanger. Vi sætter funtionerne ind i setup/draw funtionen.



function setup(){
    drawPlayerSprite();

    enemyNow();

    createCanvas(windowWidth,windowHeight);

    walls();

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

    healthbarGoingDown();
    drawSprites();

    

}
