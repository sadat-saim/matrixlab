import evaluate from 'evaluator.js';

const err = msg => { throw Error(msg) }

function evaluater(equation, value) {
    let eq = equation.split("")
    eq.map((e, i) => {
        if (e === "x") {
            eq[i] = `${value}`
        }
    })
    return evaluate(eq.join(""))
}

export default function FaslePosition(equation, negValue = err("Required negValue and f(val) must be negative"), posValue = err("Required posValue and f(val) must be a positive number"), tolerance = err("Required tolerance")) {
    let lowerValue = negValue;
    let upperValue = posValue;
    let prevRoot = null;
    let err = null;

    for (let i = 0;; i++) {
        let upperFunction = evaluater(equation, upperValue);
        let lowerFunction = evaluater(equation, lowerValue);
        let x = ((lowerValue * upperFunction) - (upperValue * lowerFunction)) / (upperFunction - lowerFunction);


        //console.log(eq.join(""))//Show equation

        if (i) {
            err = Math.abs(((prevRoot - x) / x) * 100);
            if (err <= tolerance) {
                return `Root: ${x} Evaluated: ${evaluater(equation, x)} Itarations: ${i} Error: ${err}`;
            }
        }
        if (evaluater(equation, x) > 0) {
            upperValue = x;
            prevRoot = x;
        } else if (evaluater(equation, x) < 0) {
            lowerValue = x;
            prevRoot = x;
        }
        console.log(`Root: ${x} Evaluated: ${evaluater(equation, x)} Itarations: ${i} Error: ${err}`);
    }
}