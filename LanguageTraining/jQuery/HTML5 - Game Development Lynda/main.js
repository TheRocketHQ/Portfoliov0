// Objects actual ones not js stuff, like for game lol it's 3am im dead
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;
const BRICK_WIDTH = 60;
const BRICK_HEIGHT = 30;
var stage;
var paddle;
var ball;

function init() {
    stage = new createjs.Stage("demoCanvas");
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);

    createBrick();
    createBall();
    createPaddle();
}

function createBrick() {
    var brick = new createjs.Shape();
    brick.graphics.beginFill('#000FFF');
    brick.graphics.drawRect(0, 0, BRICK_WIDTH, BRICK_HEIGHT);
    brick.graphics.endFill();
    stage.addChild(brick);
}

function createBall() {
    ball = new createjs.Shape();
    ball.graphics.beginFill('red').drawCircle(0, 0, 8);
    ball.x = 100;
    ball.y = 100;
    stage.addChild(ball);
}

function createPaddle() {
    paddle = new createjs.Shape();
    paddle.graphics.beginFill('#000000').drawRect(0, 0, PADDLE_WIDTH, PADDLE_HEIGHT);
    paddle.y = 200;
    stage.addChild(paddle);
}