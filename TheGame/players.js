
var speed = 2.5;

var ply1;
var ply2;
var attackDetect; 
var healthPly1_1;
var healthPly1_2;
var healthPly1_3;
var healthPly2_1;
var healthPly2_2;
var healthPly2_3;

function playerOneMovement(){
    if(keyDown(87)){
        ply1.position.y = ply1.position.y - speed;
        print("up");
    }
    if(keyDown(83)){
        ply1.position.y = ply1.position.y + speed;
        print("down");
    }
    if(keyDown(68)){
        ply1.position.x = ply1.position.x + speed;
        print("right");
    }
    if(keyDown(65)){
        ply1.position.x = ply1.position.x - speed;
        print("left");
    }
}

function playerTwoMovement(){
    if(keyDown(38)){
        ply2.position.y = ply2.position.y - speed;
        print("up");
    }
    if(keyDown(40)){
        ply2.position.y = ply2.position.y + speed;
        print("down");
    }
    if(keyDown(39)){
        ply2.position.x = ply2.position.x + speed;
        print("right");
    }
    if(keyDown(37)){
        ply2.position.x = ply2.position.x - speed;
        print("left");
    }
}

function drawPlayerSprite(){
    ply1=createSprite(100,100,32,32);
    ply1.shapeColor = color(0,0,255);

    ply2=createSprite(300,300,32,32);
    ply2.shapeColor = color(255,0,0);
}

function drawPlayerOneAttack(){
    if(keyDown(69)){
        print("I am Here");
        fill(255,30,30);
        arc(ply1.position.x,ply1.position.y,70,70,-PI,0,CHORD); 
    }

}


function healthbar(){


    healthPly1_1=createSprite(50, 700, 16, 16);
    healthPly1_1.shapeColor = color(255, 0, 0);

    healthPly1_2=createSprite(100, 700, 16, 16);
    healthPly1_2.shapeColor = color(255, 0, 0);
    
    healthPly1_3=createSprite(150, 700, 16, 16);
    healthPly1_3.shapeColor = color(255, 0, 0);
    
    healthPly2_1=createSprite(1490, 700, 16, 16);
    healthPly2_1.shapeColor = color(255, 0, 0);

    healthPly2_2=createSprite(1440, 700, 16, 16);
    healthPly2_2.shapeColor = color(255, 0, 0);
    
    healthPly2_3=createSprite(1390, 700, 16, 16);
    healthPly2_3.shapeColor = color(255, 0, 0);
}
 
    function healthbarGoingDown(){

        if(health1 <= 2){
            healthPly1_3.remove();
        }

        if(health1 <= 1){
            healthPly1_2.remove();
        }

        if(health1 <= 0){
            healthPly1_1.remove();
        }
        
        if(health2 <= 2){
            healthPly2_3.remove();
        }

        if(health2 <= 1){
            healthPly2_2.remove();
        }

        if(health2 <= 0){
            healthPly2_1.remove();
        }
    }




