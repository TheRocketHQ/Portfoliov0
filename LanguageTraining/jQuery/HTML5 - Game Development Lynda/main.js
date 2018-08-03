// Objects actual ones not js stuff, like for game lol it's 3am im dead
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
    stage = new createjs.Stage("demoCanvas");
    createBrickGrid();
    createBall();
    createPaddle();
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
}

function tick(event) {
    stage.update();

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
}

function createBall() {
    ball = new createjs.Shape();
    ball.graphics.beginFill('red').drawCircle(0, 0, 8);
    // ball.x = 100;
    // ball.y = 100;
    ball.x = stage.canvas.width / 2;
    ball.y = stage.canvas.height / 2;
    stage.addChild(ball);

    destroyBrick(bricks);
}

function createPaddle() {
    paddle = new createjs.Shape();
    paddle.width = PADDLE_WIDTH;
    paddle.height = PADDLE_HEIGHT;
    paddle.graphics.beginFill('#3333333').drawRect(0, 0, paddle.width, paddle.height);
    paddle.x = stage.canvas.width / 2 - PADDLE_WIDTH / 2;
    paddle.y = stage.canvas.height * 0.9;
    stage.addChild(paddle);
    stage.addChild(paddle);
}

function destroyBrick(brick) {
    createjs.Tween.get(brick, {}).to({
        scaleX: 0,
        scaleY: 0
    }, 500)
}