var enemySmallX = 500;
var enemySmallY = 500;
var spr;
var health1 = 3;
var health2 = 3;
var damage = 1;
var enemyHp = 3;



function enemyNow() {
    spr = createSprite(
        enemySmallX, enemySmallY, 40, 40);
      spr.shapeColor = color(255);
      spr.rotateToDirection = true;
      spr.maxSpeed = 2;
      spr.friction = 0.60;
      
}






function enemyMovement() {
    
    
    
    if(ply1.position.x && ply1.position.y <= ply2.position.x && ply2.position.y){
    spr.attractionPoint(2, ply1.position.x, ply1.position.y);
      drawSprites();
    }
    if(ply1.position.x && ply1.position.y >= ply2.position.x && ply2.position.y){
        spr.attractionPoint(2, ply2.position.x, ply2.position.y);
        }

        
    
}

function enemyAttack() {
    if(spr.collide(ply1) && cooldown <= 0){
        health1 = health1 - damage;
        cooldown = 60;
    }
    if(spr.collide(ply2) && cooldown <= 0){
        health2 = health2 - damage;
        cooldown = 60;
    }
}

function death(){
    if(health1 <= 0){
        ply1.remove();
    }
    if(health2 <= 0){
        ply2.remove();
    }
    if(enemyHp <= 0){
        enemy.remove();
    }
}
