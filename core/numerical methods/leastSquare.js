import Matrix from "../matrix.js";

export default function leastSquare(dataPoints, multipleVariables) {
    // for 1 independent variable
    let n = dataPoints.length;
    let x = dataPoints.map(row => row[0]).reduce((ac, cv) => ac + cv)
    let sqX = dataPoints.map(row => row[0] ** 2).reduce((ac, cv) => ac + cv)
    let y = dataPoints.map(row => row[1]).reduce((ac, cv) => ac + cv)
    let xy = dataPoints.map(row => row[0] * row[1]).reduce((ac, cv) => ac + cv)
    let a1 = ((n * xy) - (x * y)) / ((n * sqX) - (x ** 2))
    let a0 = (y / n) - (a1 * (x / n))
        //for 2 independent variables
    if (multipleVariables) {
        let sqY = dataPoints.map(row => row[1] ** 2).reduce((ac, cv) => ac + cv)
        let z = dataPoints.map(row => row[2]).reduce((ac, cv) => ac + cv)
        let yz = dataPoints.map(row => row[1] * row[2]).reduce((ac, cv) => ac + cv)
        let zx = dataPoints.map(row => row[0] * row[2]).reduce((ac, cv) => ac + cv)
        let matrix = new Matrix()
        let result = matrix.multiply(matrix.inv([
                [n, x, y],
                [x, sqX, xy],
                [y, xy, sqY]
            ]), [
                [z],
                [zx],
                [yz]
            ])
            //console.log(z, yz, zx, sqY, matrix, result)
        return [...result.map(e => e[0])];
    }
    // console.log(x, sqX, y, xy, a1, a0)
    return [a0, a1]
}