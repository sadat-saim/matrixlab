"use strict";
import Matrix from "./matrix.js"
class Vector extends Matrix {
    constructor(vect) {
        super(vect);
        this.vect = vect;
        this.message = "Invalid vector: length of two vectors must be equal";
    }
    dot(vectA, vectB = this.vect) {
        if (vectA.length !== vectB.length)
            return this.message;
        return vectA.map((e, i) => e * vectB[i]).reduce((acc, cv) => acc + cv);
    }
    cross(vectA, vectB = this.vect) {
        if (vectA.length !== vectB.length)
            return this.message;
        let unitVector = [];
        let productVector = [];
        for (let i = 0; i < vectA.length; i++) {
            unitVector.push(1);
        }
        let vectorMatrix = [unitVector, vectA, vectB];
        //taking the unit vector into account
        vectorMatrix.forEach((row, i) => {
            productVector.push(this.det(this.cof(0, i, vectorMatrix)) * (-1) ** i)
        })
        return productVector;
    }
    addv(vectA, vectB = this.vect) {
        let add = this.add([vectA], [vectB])[0]
        return typeof add === "string" ? this.message : add;
    }
    subv(vectA, vectB = this.vect) {
        let sub = this.sub([vectA], [vectB])[0]
        return typeof sub === "string" ? this.message : sub;
    }
    mag(vectA = this.vect) {
        return Math.sqrt(vectA.map(e => e ** 2).reduce((ac, cv) => ac + cv))
    }

    ang(deg, vectA, vectB = this.vect) {
        //Math.acos() returns radian value, mode for choosing angles(rad || deg)
        //mode is true || false , if acos > 1 || < -1 return NAN
        let cosA = Math.acos(this.dot(vectA, vectB) / (this.mag(vectA) * this.mag(vectB)))
        return deg ? cosA * (180 / Math.PI) : cosA;
    }
}

export default Vector;