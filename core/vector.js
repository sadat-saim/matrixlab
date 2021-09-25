"use strict";
import Matrix from "./matrix.js"
class Vector extends Matrix {
    constructor(vect) {
        super(vect);
        this.vect = vect;
    }
    dot(vectA, vectB = this.vect) {
        if (vectA.length !== vectB.length)
            return "Invalid vector: please fill the empty values with 0";
        return vectA.map((e, i) => e * vectB[i]).reduce((acc, cv) => acc + cv);
    }
    cross(vectA, vectB = this.vect) {
        if (vectA.length !== vectB.length)
            return "Invalid vector: please fill the empty values with 0";
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
        return this.add([vectA], [vectB])[0];
    }
    subv(vectA, vectB = this.vect) {
        return this.sub([vectA], [vectB])[0];
    }
}

export default Vector;