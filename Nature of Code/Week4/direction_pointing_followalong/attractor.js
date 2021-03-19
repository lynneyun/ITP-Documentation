// Code adapted from
// The Coding Train / Daniel Shiffman
// https://youtu.be/oXwCVDXS2Lg
// https://thecodingtrain.com/learning/nature-of-code/3.3-angles-and-vectors.html


class Attractor {
    constructor(x, y, m, txt) {
        this.pos = createVector(x, y);
        this.mass = m;
        this.r = sqrt(this.mass) * 2;
        this.text = txt;

    }

    attract(mover) {
        let force = p5.Vector.sub(this.pos, mover.pos);
        let distanceSq = constrain(force.magSq(), 100, 500);
        let G = 0.5;
        let strength = (G * (this.mass * mover.mass)) / distanceSq;
        force.setMag(strength);
        mover.applyForce(force);
    }

    show() {
        noStroke();
        fill(255);
        textSize(this.r);
        let txtWdth = textWidth(this.text);
        text(this.text, this.pos.x - txtWdth / 2, this.pos.y);

    }
}