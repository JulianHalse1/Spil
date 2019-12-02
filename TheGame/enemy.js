var enemySmallX = 200;
var enemySmallY = 200;
var spr;



function enemyNow() {
    spr = createSprite(
        enemySmallX, enemySmallY, 40, 40);
      spr.shapeColor = color(255);
      spr.rotateToDirection = true;
      spr.maxSpeed = 2;
      spr.friction = 0.60;
      
}



function enemyMovement() {
    spr.attractionPoint(2, ply1.position.x, ply1.position.y);
      drawSprites();
}

function enemyAttack() {
    if(spr.collide(ply1)){
        ply1.shapeColor = color(255, 0, 0);
    }
    if(spr.collide(ply2)){
        ply2.shapeColor = color(0, 255, 0);
    }
}


