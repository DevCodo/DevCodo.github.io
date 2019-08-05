var canvas = document.getElementById("canvas");
if (canvas.getContext) {
    /** @type {CanvasRenderingContext2D} */
    var ctx = canvas.getContext("2d");
}
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
canvas.width = 400;
canvas.height = 400;
var animationTime;
var width = canvas.width;
var height = canvas.height;
var blockSize = 10;
var widthInBlocks = width / blockSize;
var heightInBlocks = height / blockSize;
var score = 0;
var timeoutId;
var chek = true;
var apple;
var snake;
var directions = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
}

function drawBorder() {
    ctx.fillStyle = "Gray";
    ctx.fillRect(0, 0, width, blockSize);
    ctx.fillRect(0, height - blockSize, width, blockSize);
    ctx.fillRect(0, 0, blockSize, height);
    ctx.fillRect(width - blockSize, 0, blockSize, height);
}

function drawScore() {
    ctx.font = '20px Courier';
    ctx.fillStyle = 'Black';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText("Счет: " + score, blockSize, blockSize);
}

function gameOver() {
    clearTimeout(timeoutId);
    ctx.font = '60px Courier';
    ctx.fillStyle = 'Black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText("Конец игры", width / 2, height / 2);
}

function start() {
    ctx.font = '20px Courier';
    ctx.fillStyle = 'Black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText("нашми Enter чтобы начать", width / 2, height * 2 / 3);
}

function circle(x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    fillCircle ? ctx.fill() : ctx.stroke();
}

function gameLoop() {
    chek = false;
    ctx.clearRect(0, 0, width, height);
    drawScore();
    snake.move();
    snake.draw();
    apple.draw();
    drawBorder();
    timeoutId = setTimeout (gameLoop, animationTime)
}

class Block {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }
    drawSquare(color) {
        var x = this.col * blockSize;
        var y = this.row * blockSize;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, blockSize, blockSize);
    }
    drawCircle(color) {
        var centerX = this.col * blockSize + blockSize / 2;
        var centerY = this.row * blockSize + blockSize / 2;
        ctx.fillStyle = color;
        circle(centerX, centerY, blockSize / 2, true);
    }
    equal(otherBlock) {
        return this.col === otherBlock.col && this.row === otherBlock.row;
    }
}

class Snake {
    constructor() {
        this.segments = [
            new Block(7, 5),
            new Block(6, 5),
            new Block(5, 5)
        ];
        this.direction = "right";
        this.nextDirection = "right";
    }
    draw() {
        for (let i = 0; i < this.segments.length; i++) {
            if( i % 2 == 0) {
                this.segments[i].drawSquare("#2b1d00");
            } else {
                this.segments[i].drawSquare("#57440d");
            }
            this.segments[0].drawSquare("#000000");
        }
    }
    move() {
        var head = this.segments[0];
        var newHead;
        this.direction = this.nextDirection;
        
        if (this.direction === "right") {
            newHead = new Block(head.col + 1, head.row)
        } else if (this.direction === "down") {
            newHead = new Block(head.col, head.row + 1)
        } else if (this.direction === "left") {
            newHead = new Block(head.col - 1, head.row)
        } else if (this.direction === "up") {
            newHead = new Block(head.col, head.row - 1)
        }

        if (this.checkCollision(newHead)) {
            gameOver();
            start();
            chek = true;
            return;
        }

        this.segments.unshift(newHead);

        if (newHead.equal(apple.position)) {
            score++;
            apple.move();
            animationTime -= 2;
        } else {
            this.segments.pop();
        }
    }
    checkCollision(head) {
        var leftCollision = (head.col === 0);
        var topCollision = (head.row === 0);
        var rightCollision = (head.col === widthInBlocks - 1);
        var bottomCollision = (head.row === widthInBlocks - 1);

        var wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;

        var selfCollision = false;

        for (let i = 0; i < this.segments.length; i++) {
            if (head.equal(this.segments[i])) {
                selfCollision = true;
            }
        }

        return wallCollision || selfCollision;
    }
    setDirection(newDirection) {
        if (this.direction === "up" && newDirection === "down") {
            return;
        } else if (this.direction === "right" && newDirection === "left") {
            return;
        } else if (this.direction === "down" && newDirection === "up") {
            return;
        }else if (this.direction === "left" && newDirection === "right") {
            return;
        }

        this.nextDirection = newDirection;
    }
}

class Apple {
    constructor() {
        this.position = new Block(10, 10);
    }
    draw() {
        this.position.drawCircle("LimeGreen");
    }
    move() {
        var randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
        var randomRow = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
        this.position = new Block(randomCol, randomRow);
        for (let i = 0; i < snake.segments.length; i++) {
            if (this.position.equal(snake.segments[i])) {
                this.move();
            }
        }
    }
}

$("body").keydown(function (event) {
    if (chek) {
        if (event.keyCode === 13) {
            animationTime = 100;
            score = 0;
            clearTimeout(timeoutId);
            apple = new Apple();
            snake = new Snake();
            gameLoop();
        }  
    } else {
        var newDirection = directions[event.keyCode];
        if (newDirection) {
            snake.setDirection(newDirection);
        }
    }
});

drawScore();
drawBorder();
start();






