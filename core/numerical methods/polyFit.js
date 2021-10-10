import Matrix from '../matrix.js'

export default function polyFit(data, degree = 2) {
    let datasets = [data.length]
    let matA = []
    let matB = []
    let mat = new Matrix()
    for (let i = 1; i <= 2 * degree; i++) {
        let c = data.map(point => point[0] ** i).reduce((ac, cv) => ac + cv)
        datasets.push(c)
            //console.log(datasets)
    }
    for (let i = 0; i <= degree; i++) {
        if (!i) {
            matB.push([data.map(point => point[1]).reduce((ac, cv) => ac + cv)])
        } else {
            let c = data.map(point => point[1] * (point[0] ** i)).reduce((ac, cv) => ac + cv)
            matB.push([c])
        }

    }
    for (let i = 0; i <= degree; i++) {
        matA.push(datasets.slice(i, (degree + 1 + i)))
    }
    let invMatA = mat.inv(matA)
    if (typeof invMatA === 'string') return invMatA
        //ax^2+bx+c will return [a,b,c]
    return [...mat.multiply(invMatA, matB).map(c => c[0])].reverse()
        //console.log(matA, matB)
}