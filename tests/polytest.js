import polyFit from "../core/numerical methods/polyFit.js"

//ax^2+bx+c will return [a,b,c]
console.log(polyFit([
        [0, 1],
        [1, 6],
        [2, 17],
    ], 2)) //[3,2,1]

console.log(polyFit([
        [1, 5.5],
        [2, 43.1],
        [3, 128],
        [4, 290],
        [5, 498.4]
    ], 3)) //[-0.075,30.6,-57.9,33.8]

console.log(polyFit([
        [0, 1],
        [1, 0],
        [2, 3],
        [3, 10],
        [4, 21]
    ])) //[2,-3,1]