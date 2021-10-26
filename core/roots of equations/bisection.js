//visit to learn more about the signs https://www.npmjs.com/package/evaluator.js
// equation must be expressed in x.
import evaluate from 'evaluator.js'

/*
@required {equation} expression must be a string
@required {negValue} expression must be a number and F(negValue) = negative number
@required {posValue} expression must be a number and F(posValue) = positive integer
@required {tolerance} expression must be a positive number
*/

const err = msg => { throw Error(msg) }

export default function Bisection(equation, negValue = err("Required negValue and f(val) must be negative"), posValue = err("Required posValue and f(val) must be a positive number"), tolerance = err("Required tolerance")) {
    let lowerValue = negValue;
    let upperValue = posValue;
    let prevRoot = null;
    let err = null;

    for (let i = 0;; i++) {
        let eq = equation.split("")
        let x = (lowerValue + upperValue) / 2;
        eq.map((e, i) => {
            if (e === "x") {
                eq[i] = `${x}`
            }
        })

        //console.log(eq.join(""))//Show equation

        if (i) {
            err = Math.abs(((prevRoot - x) / x) * 100);
            if (err <= tolerance) {
                return `Root: ${x} Evaluated: ${evaluate(eq.join(""))} Itarations: ${i} Error: ${err}`;
            }
        }
        if (evaluate(eq.join("")) > 0) {
            upperValue = x;
            prevRoot = x;
        } else if (evaluate(eq.join("")) < 0) {
            lowerValue = x;
            prevRoot = x;
        }
        console.log(`Root: ${x} Evaluated: ${evaluate(eq.join(""))} Itarations: ${i} Error: ${err}`);
    }

}




/*
Signs

* Multiply
/ Devide
^ Power
% Modulo

Constants
e Euler's constant and base of natural logarithms
ln Natural Logarithms
log10 base 10 logarithms
log(x) evaluate value of logX
*/