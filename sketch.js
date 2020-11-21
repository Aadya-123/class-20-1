var fixRect, movRect;

function setup() {
    createCanvas(400, 400);
    fixRect = createSprite(200, 200, 50, 80);
    fixRect.shapeColor = "yellow";
    fixRect.debug = true;

    movRect = createSprite(300, 200, 80, 50);
    movRect.shapeColor = "green";
    movRect.debug = true;

}

function draw() {
    background(0, 0, 0);

    movRect.x = World.mouseX;
    movRect.y = World.mouseY;

    if (fixRect.x - movRect.x <= movRect.width / 2 + fixRect.width / 2 &&
        movRect.x - fixRect.x <= movRect.width / 2 + fixRect.width / 2 &&
        fixRect.y - movRect.y <= movRect.height / 2 + fixRect.height / 2 &&
        movRect.y - fixRect.y <= movRect.height / 2 + fixRect.height / 2) {

        fixRect.shapeColor = "red";
        movRect.shapeColor = "red";

    } else {

        fixRect.shapeColor = "yellow";
        movRect.shapeColor = "green";

    }

    drawSprites();
}