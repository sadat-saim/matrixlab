// equation must be expressed in x.
import evaluate from 'evaluator.js'

function Bisection(equation, negValue, posValue, tolerance) {

    let lowerValue = negValue;
    let upperValue = posValue;
    let x = (lowerValue + upperValue) / 2;
    let eq = equation.split("")
    eq.map((e, i) => {
        if (e === "x") {
            eq[i] = `${x}`
        }
    })
    console.log(evaluate(eq.join("")))
}

Bisection("(x^3)-x-1", 1, 2, 0.5)
Bisection("(x^3)-x-1", 2, 2, 0.5)