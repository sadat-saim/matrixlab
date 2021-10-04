import leastSquare from "../core/numerical methods/leastSquare.js";

console.log(leastSquare([
        [1, 0.6],
        [2, 2.4],
        [3, 3.5],
        [4, 4.8],
        [5, 5.7]
    ])) //[-3.8,1.26]

console.log(leastSquare([
        [0, 0, 2],
        [1, 1, 4],
        [2, 3, 3],
        [4, 2, 16],
        [6, 8, 8]
    ], true)) //[2,5,-3]