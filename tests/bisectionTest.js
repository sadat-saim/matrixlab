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

console.log(Bisection("(x^3)-x-1", 1, 2, 0.000005))
console.log(Bisection("(x^3)-(2*x)-5", 2, 3, 0.00002))
console.log(Bisection("(x^3)+(x^2)+x+7", -3, -2, 0.00002))
console.log(Bisection("x*(e^x)-1", 0, 1, 0.00005))
console.log(Bisection("2*x-log(x)-7", 3, 4, 0.000002))
console.log(Bisection("(x^4)-2084*x-5835", 0, 14, 0.0005))

//throws error because negValue, posValue and tolerance is required.
// console.log(Bisection("(x^2)-x+1"))