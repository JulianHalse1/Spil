
var speed = 2.5;

var ply1;
var ply2;
var attack; 

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
    ply1=createSprite(100,100,50,50);
    ply1.shapeColor = color(0,0,255);

    ply2=createSprite(300,300,50,50);
    ply2.shapeColor = color(255,0,0);
}

function drawPlayerOneAttack(){
    if(keyDown(69)){
        attack = fill(255,30,30),arc(ply1.position.x,ply1.position.y,70,70,-PI,0,CHORD);
    }
    }

