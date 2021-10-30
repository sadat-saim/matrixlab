import evaluate from 'evaluator.js'

/*In Newton Raphson method, we should choose a initial guess of the root 
which is close to 0 for F(initial guess)*/

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

export default function NewtonRaphson(equation, derivative = err("Required derivative of the equation"), initialGuess = err("Required initial guess"), tolerance = err("Required tolerance")) {
    let prevRoot = null;
    let err = null;
    let guess = initialGuess;

    for (let i = 0;; i++) {
        let x = (guess - (evaluater(equation, guess) / evaluater(derivative, guess)));

        if (i) {
            err = Math.abs(((prevRoot - x) / x) * 100);
            if (err <= tolerance) {
                return `Root: ${x} Evaluated: ${evaluater(equation, x)} Itarations: ${i} Error: ${err}`;
            }
        }

        prevRoot = x;
        guess = x;

        console.log(`Root: ${x} Evaluated: ${evaluater(equation, x)} Itarations: ${i} Error: ${err}`);
    }

}