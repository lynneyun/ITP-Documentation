// Adapted from The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/learning/nature-of-code/1.6-acceleration-vector.html
let mover;

// text to points 
let font;
let fontSize = 150;
let textPoints = [];

function preload() {
    font = loadFont('assets/NotoSans-Thin.ttf');
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    // mover = new Mover(10, 10);

    // making text to points
    points = font.textToPoints('WORRIES', width / 5, height / 1.78, fontSize, {
        sampleFactor: 0.045,
        simplifyThreshold: 0
    })
    for (let i = 0; i < points.length; i++) {
        textPoints.push(new Mover(points[i].x, points[i].y));
    }

}

function draw() {
    background(0);
    for (let i = 0; i < textPoints.length; i++) {
        textPoints[i].update();
        textPoints[i].show();
    }

}