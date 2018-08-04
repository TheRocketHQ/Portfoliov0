const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;
const BRICKS_WIDTH = 60;
const BRICKS_HEIGHT = 30;
const BALL_RADIUS = 8;
var stage;
var paddle;
var ball;
var bricks = [];



function init() {
    stage = new createjs.Stage("testCanvas");

    createBall();
    createPaddle();
    createBrickGrid();

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", tick); //Changed to tick from stage
}

function tick(event) {
    stage.update();
    // the tick it's a refresh rate, decreasing a position refresh rate will give the illusion of movement, 
    // i.e car wheels slowing down, will look like going back
    if (ball.up) {
        ball.y -= ball.ySpeed;
        ball.x -= ball.ySpeed;
    }

    for (var i = 0; i < bricks.length; i++) {
        if (checkCollision(ball, bricks[i])) {
            destroyBrick(bricks[i]);
        }
    }
}

function checkCollision(ballElement, brickElement) {
    if (ballElement.x + BALL_RADIUS <= brickElement.x - BRICKS_WIDTH / 2 || ballElement.x - BALL_RADIUS >= brickElement.x + BRICKS_WIDTH / 2 || ballElement.y - BALL_RADIUS >= brickElement.y + BRICKS_HEIGHT / 2 || ballElement.y + BALL_RADIUS <= brickElement.y - BRICKS_HEIGHT / 2) return false;
    return true;
}


function createBrickGrid() {
    for (var i = 0; i < 14; i++)
        for (var j = 0; j < 5; j++) {
            createBrick(i * (BRICKS_WIDTH + 10) + 40, j * (BRICKS_HEIGHT + 5) + 20);
        }
}

function createBrick(x, y) {
    var brick = new createjs.Shape();
    brick.graphics.beginFill('#000FFF');
    brick.graphics.drawRect(0, 0, BRICKS_WIDTH, BRICKS_HEIGHT);
    brick.graphics.endFill();

    brick.x = x;
    brick.y = y;

    brick.regX = BRICKS_WIDTH / 2;
    brick.regY = BRICKS_HEIGHT / 2;
    stage.addChild(brick);
    // note push on tick
    bricks.push(brick);
}

function destroyBrick(brick) {
    createjs.Tween.get(brick, {}).to({
        scaleX: 0,
        scaleY: 0
    }, 500)
}

function createBall() {
    ball = new createjs.Shape();
    ball.graphics.beginFill("Red").drawCircle(0, 0, BALL_RADIUS);

    ball.x = stage.canvas.width / 2;
    ball.y = stage.canvas.height / 2;
    stage.addChild(ball);

    // Animation, false values will indicate opposite movements, like "ball.up = false;" will say it's going down 
    ball.up = true;
    ball.right = true;
    ball.xSpeed = 0;
    ball.ySpeed = 1;
    ball.lastX = 0;
    ball.lastY = 0;
}

function createPaddle() {
    paddle = new createjs.Shape();
    paddle.width = PADDLE_WIDTH;
    paddle.height = PADDLE_HEIGHT;
    paddle.graphics.beginFill('#000000').drawRect(0, 0, paddle.width, paddle.height);
    paddle.x = stage.canvas.width / 2 - PADDLE_WIDTH / 2;
    paddle.y = stage.canvas.height * 0.9;
    stage.addChild(paddle);
}