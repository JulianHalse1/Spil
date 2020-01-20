
 class enemy{

    constructor(){
    this.enemySmallX = 500;
    this.enemySmallY = 500;
    this.spr; //enemy
    this.damage = 1;

        this.spr = createSprite(
            this.enemySmallX, this.enemySmallY, 40, 40);
            this.spr.shapeColor = color(255);
            this.spr.rotateToDirection = true;
            this.spr.maxSpeed = 2;
            this.spr.friction = 0.60;
      
}
    enemyMovement() {

    if(ply1.position.x && ply1.position.y <= ply2.position.x && ply2.position.y){
    this.spr.attractionPoint(2, ply1.position.x, ply1.position.y);
      drawSprites();
    }
    if(ply1.position.x && ply1.position.y >= ply2.position.x && ply2.position.y){
    this.spr.attractionPoint(2, ply2.position.x, ply2.position.y);
        }
}
    enemyAttack() {
    if(this.spr.collide(ply1) && cooldown <= 0){
        health1 = health1 - this.damage;
        cooldown = 60;
    }
    if(this.spr.collide(ply2) && cooldown <= 0){
        health2 = health2 - this.damage;
        cooldown = 60;
    }
}
    death(){
    if(health1 <= 0){
        ply1.remove();
    }
    if(health2 <= 0){
        ply2.remove();
    }
}

}
