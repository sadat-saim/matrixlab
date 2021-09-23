import Matrix from "../mat.js";

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
    [10, 5, 1, 7]
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
console.log(mat.sub(matrixB))


console.log(mat.cof(1, 0))
console.log(mat.det())
console.log(mat.adj(mat.cofmat()))
console.log(mat.inv())
console.log(matMul.multiply([
        [1, 2, 3],
        [4, 5, 6]
    ])) //[[140,146],[320,335]]

console.log(mat.multiply(matrixB))