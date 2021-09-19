import { Simulation } from './components/simulation.js';
import { Ball } from './components/ball.js';
let projectileSimulationStructure = {
    id: 'particle-motion-simulation',
    title: 'Particle Motion Simulation',
    buttons: {
        'Create Balls': function createBalls() {
            let numberOfBalls = Number.parseInt(prompt("How many balls do you want?"));
            if (Number.isNaN(numberOfBalls)) {
                numberOfBalls = 1;
            }
            for (let i = 0; i < numberOfBalls; i++) {
                let newBall = new Ball(projectileSimulationProperties);
                newBall.container.element.appendChild(newBall.element);
                projectileSimulationProperties.balls.push(newBall);
            }
        },
        'Remove Ball': function removeBall() {
            let ballToRemove = projectileSimulationProperties.balls.pop();
            let intervalToRemove = projectileSimulationProperties.intervalIDs.pop();
            clearInterval(intervalToRemove);
            ballToRemove.container.element.removeChild(ballToRemove.element);
        },
        'Remove All Balls': function removeAll() {
            let length = projectileSimulationProperties.balls.length;
            for (let i = 0; i < length; i++) {
                let ballToRemove = projectileSimulationProperties.balls.pop();
                let intervalToRemove = projectileSimulationProperties.intervalIDs.pop();
                clearInterval(intervalToRemove);
                ballToRemove.container.element.removeChild(ballToRemove.element);
            }
        },
        'Start Simulation': function startSimulation() {
            projectileSimulationProperties.balls.forEach((ball) => projectileSimulationProperties.intervalIDs.push(setInterval(ball.move, 1000/60, ball)) );
        },
        'Stop Simulation': function stopSimulation() {
            projectileSimulationProperties.intervalIDs.forEach( (id) => clearInterval(id) );
        },
        'Change Gravity': function changeGravity() {
            let newGravity = Number.parseInt(prompt("How strong do you want the gravity to be?"));
            if (!Number.isNaN(newGravity)) {
                projectileSimulationProperties.gravity = newGravity;
                projectileSimulationProperties.balls.forEach((ball) => {
                    ball.velY = ball.originalVelY;
                }) 
            }
        }
    }
}

let projectileSimulationProperties = {
        balls: [],
        intervalIDs: [],
        maxEdge: 450,
        minEdge: 0,
        gravity: 0,
        project: new Simulation(projectileSimulationStructure)
}
document.getElementById('projects').appendChild(projectileSimulationProperties.project.element);