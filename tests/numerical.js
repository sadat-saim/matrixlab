import leastSquare from "../core/numerical methods/leastSquare.js";

/* 
 *2 independent variable will return   ay+bx+c will return [a,b,c]
 * and 1 independent variable will return ax+b will return [a,b]
 */

console.log(leastSquare([
        [1, 0.6],
        [2, 2.4],
        [3, 3.5],
        [4, 4.8],
        [5, 5.7]
    ])) //[1.26,-3.8]

console.log(leastSquare([
        [0, 0, 2],
        [1, 1, 4],
        [2, 3, 3],
        [4, 2, 16],
        [6, 8, 8]
    ], true)) //[-3,5,2]

let dataPoints = [
    [0.1139, -0.0969],
    [0.3617, 0.3010],
    [0.5185, 0.5682],
    [0.6334, 0.7782],
    [0.7242, 0.9395]
]

console.log(leastSquare(dataPoints)) //[1.7,-0.30]

let multipleDataPoints = [
    [60, 22, 140],
    [62, 25, 155],
    [67, 24, 159],
    [70, 20, 179],
    [71, 15, 192],
    [72, 14, 200],
    [75, 14, 212],
    [78, 11, 215]
]

console.log(leastSquare(multipleDataPoints, true));
// model y = -1.656x1+3.14789x2-6.867