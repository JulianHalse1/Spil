// Dette er vores gamemanger. Vi sætter funtionerne ind i setup/draw funtionen.

function setup(){
    drawPlayerSprite();

    createCanvas(400,400);
}

function draw(){
    background(50)

    drawSprites();

    playerOneMovement();

    playerTwoMovement();
}