//visit to learn more about the signs https://www.npmjs.com/package/evaluator.js
/*
*Signs*

* Multiply
/ Devide
^ Power
% Modulo

*Constants*

e Euler's constant and base of natural logarithms
ln Natural Logarithms
log10 base 10 logarithms 
*/

import Bisection from '../core/roots of equations/bisection.js'

console.log(Bisection("(x^3)-x-1", 1, 2, 0.05))
console.log(Bisection("(x^3)-(2*x)-5", 2, 3, 0.02))
console.log(Bisection("(x^3)+(x^2)+x+7", -3, -2, 0.02))
console.log(Bisection("x*(e^x)-1", 0, 1, 0.05))