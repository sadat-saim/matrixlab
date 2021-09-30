//MatrixLab JS V1.0.0//
//Sadat-Saim (CEE,SUST)//
//https://www.facebook.com/sadat.saim.50/
"use strict";
export default class Matrix {
    constructor(matrix) {
        this.matrix = matrix;
    }

    cof(i, j, matrix = this.matrix) {
        let cofMat = matrix.map(row =>
            row.filter((_, colIndex) => j !== colIndex)
        )
        cofMat.splice(i, 1)
        return cofMat
    }

    cofmat(matrix = this.matrix) {
        //return a matrix of the coefficients
        let cofMat = []
        matrix.map((row, i) => {
            let cofMatRow = []
            row.map((_, j) => {
                let cofDet = this.det(this.cof(i, j, matrix)) * (-1) ** (j + i + 2)
                cofMatRow.push(cofDet)
            })
            cofMat.push(cofMatRow)
        })

        return cofMat;
    }

    det(matrix = this.matrix) {
        let validInput = true;
        //input validation
        let columnLength = matrix.length;
        matrix.forEach((row) =>
            row.length === columnLength ? (validInput = true) : (validInput = false)
        );
        if (!validInput) return "Invalid matrix: Input a valid n*n square matrix";

        //If that is not used throw "access to a class field via this in a nested function" error
        let that = this

        function recursiveDeterminantMatrix(matrix) {
            if (matrix.length === 2 && matrix[0].length === 2) {
                return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
            } else {
                //sum all the value of the cofactor
                let answer = 0;
                for (let i = 0; i < matrix.length; i++) {
                    let cofactor =
                        (-1) ** i *
                        matrix[0][i] *
                        recursiveDeterminantMatrix(that.cof(0, i, matrix));
                    answer += cofactor;
                }
                return answer;
            }
        }

        return recursiveDeterminantMatrix(matrix);
    }

    adj(matrix = this.matrix) {
        if (matrix.length === 0) return "Invalid matrix: Input a valid n*n square matrix";
        for (let i = 0; i < matrix.length - 1; i++) {
            for (let j = i; j < matrix.length; j++) {
                //swap matrix[i][j] to matrix[j][i]
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }

        return matrix;
    }

    multiply(matA, matB = this.matrix) {
        if (!matA) return "Invalid matrix : Input as multiply(number || Matrix, Matrix)"
            //matB !given by the user in the constructor & in the parameter
        if (!matB.length) return matA
            //matA a number ex- 17
        if (typeof matA === "number") {
            return matB.map(row => row.map(element => element * matA))
        }
        let isPossible = matA.every(e => e.length === matB.length)
        if (!isPossible) return "Invalid matrix: Input valid matrix ij = jk"

        if (isPossible) {
            let mulMat = []
            matA.forEach((row, i) => {
                let rowMulMat = []
                for (let k = 0; k < matB[0].length; k++) {
                    let ans = 0;
                    row.forEach((e, j) => {
                        let mul = matA[i][j] * matB[j][k]
                        ans += mul
                    })
                    rowMulMat.push(ans)
                    ans = 0
                }
                mulMat.push(rowMulMat)
            })
            return mulMat
        }
    }

    inv(matrix = this.matrix, fraction = true) {
        let determinant = this.det(matrix);
        let adjecentMatrix = this.adj(this.cofmat(matrix))
        if (!determinant) return `Invalid Matrix : Determinant is ${determinant}.`;
        if (!fraction) return `1/${determinant}*${JSON.stringify(adjecentMatrix)}`
        return this.multiply((1 / determinant), adjecentMatrix)

    }

    add(matA, matB = this.matrix) {
        let row = matA.length === matB.length;
        let col = matA.every((row, i) => row.length === matB[i].length)
        if (row && col) {
            return matA.map((row, i) => row.map((element, j) => matB[i][j] + element))
        }
        return `Invalid Matrix: dimension of matA & matB must be same`
    }

    sub(matA, matB = this.matrix) {
        return this.add(this.multiply(-1, matA), matB)
    }
}

//export default Matrix;