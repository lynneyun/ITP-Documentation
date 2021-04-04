//Code Adapted from
// Flocking
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/124-flocking-boids.html
// https://youtu.be/mhjuuHl6qHM

const flock = [];
// let mouse;

let alignSlider, cohesionSlider, separationSlider;

// text to points 
let font;
let fontSize = 120;

function preload() {
    font = loadFont('assets/NotoSans-Thin.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    // mouse = new Obstacle(mouseX, mouseY, 20);
    // console.log(mouse);

    // making text to points
    points = font.textToPoints('WORRIES', width / 5, height / 1.8, fontSize, {
        sampleFactor: 0.07,
        simplifyThreshold: 0
    })
    for (let i = 0; i < points.length; i++) {
        flock.push(new Boid(points[i].x, points[i].y));
    }

}

function draw() {
    background(0);

    // delaying the number of frames before it starts to flock
    let slowStartMultiplier = map(frameCount, 0, 150, 0, 1, true)

    // flocking parameters determined sudo-randomly

    let alignAmount = map(sin(frameCount * 0.01 + 30), -1, 1, 0.5, 1.5, true);
    let cohesionAmount = map(sin(frameCount * 0.005 + 20), -1, 1, 0, 1, true)
    let separationAmount = map(sin(frameCount * 0.02 + 150), -1, 1, 0.5, 2, true);
    let circleAnimate = map(sin(frameCount * 0.05), -1, 1, 3, 10, true);
    // console.log(alignAmount)
    for (let boid of flock) {
        boid.behaviors(flock);
        boid.edges();
        boid.flock(flock, alignAmount, cohesionAmount, separationAmount);
        boid.update(slowStartMultiplier);
        boid.show(circleAnimate);
    }
}