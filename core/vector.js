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
        for (let i = 0; i < vectA.length; i++) {
            unitVector.push(1);
        }
        return unitVector;
    }
}

export default Vector;