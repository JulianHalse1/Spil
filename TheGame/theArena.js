var box1,box2,box3,box4;
var spawnTimer

enemySpawnArray=[];

function walls(){
    //draw walls in start function
    box1 = createSprite(windowWidth/2,0,windowWidth,10); //TopBox
    box2 = createSprite(windowWidth/2,windowHeight,windowWidth,10); //BottomBox
    box3 = createSprite(0,windowHeight/2,10,windowHeight); //LeftBox
    box4 = createSprite(windowWidth,windowHeight/2,10,windowHeight); //RightBox
}

function wallDetection(){
    //player 1 and player collides with the walls
    ply1.collide(box1);
    ply2.collide(box1);

    ply1.collide(box2);
    ply2.collide(box2);

    ply1.collide(box3);
    ply2.collide(box3);

    ply1.collide(box4);
    ply2.collide(box4);
}

function enemySpawnTimer(){
    setInterval(function(){print("yey");enemySpawnArray.push(new enemy());}, 5000);
}

function enemySpawnFor(){
    for (let i = enemySpawnArray.length-1; i >= 0; i--) {
        const e = enemySpawnArray[i];
         
        e.enemyMovement();
        e.enemyAttack();
        e.death();

    }
}

