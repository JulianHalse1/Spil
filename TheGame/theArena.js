var box1,box2,box3,box4;

function walls(){
    box1 = createSprite(windowWidth/2,0,windowWidth,10);
    box2 = createSprite(windowWidth/2,windowHeight,windowWidth,10);
    box3 = createSprite(0,windowHeight/2,10,windowHeight);
    box4 = createSprite(windowWidth,windowHeight/2,10,windowHeight);
}

function wallDetection(){
    ply1.collide(box1);
    ply2.collide(box1);

    ply1.collide(box2);
    ply2.collide(box2);

    ply1.collide(box3);
    ply2.collide(box3);

    ply1.collide(box4);
    ply2.collide(box4);
}