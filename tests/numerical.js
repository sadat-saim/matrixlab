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

let dataPoints = [
    [0.1139, -0.0969],
    [0.3617, 0.3010],
    [0.5185, 0.5682],
    [0.6334, 0.7782],
    [0.7242, 0.9395]
]

console.log(leastSquare(dataPoints))