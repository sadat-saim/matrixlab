import Matrix from "../core/matrix.js";
import Vector from "../core/vector.js";


let vector = new Vector([1, 2, 3]);
let vectA = [2, 2, 2]
console.log(vector)
console.log(vector.mag())
console.log(vector.dot(vectA)) //12
console.log(vector.cross(vectA)) //[2,-4,2]
console.log(vector.addv(vectA)) //[3,4,5]
console.log(vector.subv(vectA)) //[-1,0,1]
console.log(vector.ang(true, vectA)) //22.20765 deg

// if not working, try cd into the test directory then use

// let matrix = [[1,2,3],
//               [4,5,6],
//               [7,8,8]];
let matrix = [
    [8, 2, 3, 6],
    [4, 9, 6, 2],
    [7, 15, 8, 9],
    [10, 5, 1, 7]
];

let matrixB = [
    [8, 2, 3, 6],
    [4, 9, 6, 2],
    [7, 15, 8, 9],
    [10, 5, 1, 7, ]
];

// let matrix = [[10,11],[20,21],[30,31]]

let matr = [
    [10, 11],
    [20, 21],
    [30, 31]
]
let matMul = new Matrix(matr)

let mat = new Matrix(matrix)

console.log(mat.add(matrixB))
    //[
    //     [ 16, 4, 6, 12 ],  
    //     [ 8, 18, 12, 4 ],  
    //     [ 14, 30, 16, 18 ],
    //     [ 20, 10, 2, 14 ]  
    //   ]

console.log(mat.sub(matrixB))
    //[ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]
console.log(mat.cof(1, 0))
console.log(mat.det())
console.log(mat.adj(mat.cofmat()))
console.log(mat.inv())
console.log(matMul.multiply([
        [1, 2, 3],
        [4, 5, 6]
    ])) //[[140,146],[320,335]]

console.log(mat.multiply(matrixB))


// large matrix tests
let largeMatrix = [
    [5, 2, 1, 4, 6],
    [9, 4, 2, 5, 2],
    [11, 5, 7, 3, 9],
    [5, 6, 6, 7, 2],
    [7, 5, 9, 3, 3]
]

let lMatrix = new Matrix(largeMatrix)
console.log(lMatrix.det()) //-2004
console.log(lMatrix.multiply(largeMatrix))