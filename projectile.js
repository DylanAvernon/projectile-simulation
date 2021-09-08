class Ball {
    constructor(velX = getRandomInt(7, 1), velY = getRandomInt(7, 1), posX = getRandomInt(450, 0), posY = getRandomInt(450, 0)) {
      this.ball = document.createElement('div');
      this.color = getRandomColor();
      this.ball.className = 'balls';
      this.posX = posX;
      this.posY = posY;
      this.ball.style.left = `${this.posX}px`;
      this.ball.style.top = `${this.posY}px`;
      this.ball.style.background = `rgb(${this.color.red}, ${this.color.green}, ${this.color.blue})`;
      container.container.appendChild(this.ball);
  
      this.velX = velX;
      this.velY = velY;
      this.maxEdge = maxEdge;
      this.minEdge = minEdge;
    }
    computeNewCoordinates(b) {
        // New X-coordinate
        b.posX += b.velX;

        // apply gravity
        b.velY += gravity;

        // New Y-coordinate
        b.posY += b.velY;
    } 

    detectEdges(b) {
        if (b.posX < b.minEdge || b.posX > b.maxEdge) b.velX = -b.velX;
        if (b.posY > b.maxEdge) {
            b.velY = -b.velY;

            /*  The value assigned to posY when the bottom edge
                is detected must be equal to the minEdge.
             */

            b.posY = b.maxEdge;
        }
        else if (b.posY < b.minEdge) {
            b.velY = -b.velY;
            b.posY = b.minEdge;
        }
    }

    move(b) {
        b.computeNewCoordinates(b);
        b.detectEdges(b);

        // Move the ball
        b.ball.style.left = b.posX + 'px';
        b.ball.style.top = b.posY + 'px';
    }
}

class Container {
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'container';
        this.container.style.position = 'relative';
        this.container.style.borderStyle = 'solid';
        this.container.style.borderWidth = '3px';
        this.container.style.left = '11px';
        this.container.style.width = '500px';
        this.container.style.height = '500px';
        document.body.appendChild(this.container);
    }
}


function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
function getRandomColor() {
    return {
        red: getRandomInt(255, 0), 
        green: getRandomInt(255, 0), 
        blue: getRandomInt(255, 0)
    };
}
function createBalls() {
    let numberOfBalls = Number.parseInt(prompt("How many balls do you want?"));
    if (Number.isNaN(numberOfBalls)) {
        numberOfBalls = 1;
    }
    for (let i = 0; i < numberOfBalls; i++) {
        balls.push(new Ball());
    }
}
function startSimulation() {
    balls.forEach((ball) => intervalIDs.push(setInterval(ball.move, 1000/60, ball)) );
}
function stopSimulation() {
    intervalIDs.forEach( (id) => clearInterval(id) );
}
function changeGravity() {
    let newGravity = Number.parseInt(prompt("How strong do you want the gravity to be?"));
    if (!Number.isNaN(newGravity)) {
        gravity = newGravity;
    }
}

let balls = [];
let intervalIDs = [];
let maxEdge = 450;
let minEdge = 0;

/*  
    In order for the ball to keep moving 
    the force of gravity must be less than
    or equal to the ball's velocity in the
    y-direction
*/
let gravity = 1;
let container = new Container();