import Matrix from "../matrix.js";

let leastSquare = function(dataPoints, independenVariables) {
    // for 1 independent variable
    let n = dataPoints.length;
    let x = dataPoints.map(row => row[0]).reduce((ac, cv) => ac + cv)
    let sqX = dataPoints.map(row => row[0] ** 2).reduce((ac, cv) => ac + cv)
    let y = dataPoints.map(row => row[1]).reduce((ac, cv) => ac + cv)
    let xy = dataPoints.map(row => row[0] * row[1]).reduce((ac, cv) => ac + cv)
    let a1 = ((n * xy) - (x * y)) / ((n * sqX) - (x ** 2))
    let a0 = (y / n) - (a1 * (x / n))
        //for 2 independent variables
    if (independenVariables === 2) {
        let sqY = dataPoints.map(row => row[1] ** 2).reduce((ac, cv) => ac + cv)
        let z = dataPoints.map(row => row[2]).reduce((ac, cv) => ac + cv)
        let yz = dataPoints.map(row => row[1] * row[2]).reduce((ac, cv) => ac + cv)
        let zx = dataPoints.map(row => row[0] * row[2]).reduce((ac, cv) => ac + cv)
        let matrix = new Matrix([
            [n, x, y],
            [x, sqX, xy],
            [y, xy, sqY]
        ])
        console.log(z, yz, zx, sqY, matrix)

    }
    console.log(x, sqX, y, xy, a1, a0)

}

leastSquare([
    [1, 0.6],
    [2, 2.4],
    [3, 3.5],
    [4, 4.8],
    [5, 5.7]
])

leastSquare([
    [0, 0, 2],
    [1, 1, 4],
    [2, 3, 3],
    [4, 2, 16],
    [6, 8, 8]
], 2)