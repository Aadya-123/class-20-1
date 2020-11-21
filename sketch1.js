var fixRect, movRect;

function setup() {
    createCanvas(400, 400);
    fixRect = createSprite(200, 200, 50, 80);
    fixRect.shapeColor = "yellow";
    fixRect.debug = true;

    movRect = createSprite(100, 200, 80, 50);
    movRect.shapeColor = "green";
    movRect.debug = true;

    movRect.velocityX = 5;

    fixRect.velocityX = -5;

}

function draw() {
    background(0, 0, 0);



    if (fixRect.x - movRect.x <= movRect.width / 2 + fixRect.width / 2 &&
        movRect.x - fixRect.x <= movRect.width / 2 + fixRect.width / 2) {

        movRect.velocityX = (-1) * movRect.velocityX;
        fixRect.velocityX = (-1) * fixRect.velocityX;

    }

    if (fixRect.y - movRect.y <= movRect.height / 2 + fixRect.height / 2 &&
        movRect.y - fixRect.y <= movRect.height / 2 + fixRect.height / 2) {

        movRect.velocityY = (-1) * movRect.velocityY;
        fixRect.velocityX = (-1) * fixRect.velocityX;



    }

    drawSprites();
}