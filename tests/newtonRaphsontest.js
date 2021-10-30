import NewtonRaphson from "../core/roots of equations/newtonRaphson.js";


// NewtonRaphson methods converges faster.

console.log(NewtonRaphson("(x^3)-2*x-5", "3*(x^2)-2", 2, 0.000005))
console.log(NewtonRaphson("(x*sin(x))+cos(x)", "x*cos(x)", 22 / 7, 0.000005))
    //pi = 22/7
console.log(NewtonRaphson("(x^4)-2084*x-5835", "4*(x^3)-2084", 10, 0.0005))
console.log(NewtonRaphson("(x^3)-x-1", "3*(x^2)-1", 2, 0.000005))

// console.log(FaslePosition("(x^3)-(2*x)-5", 2, 3, 0.00002))
// console.log(FaslePosition("(x^3)+(x^2)+x+7", -3, -2, 0.00002))
// console.log(FaslePosition("x*(e^x)-1", 0, 1, 0.00005))
// console.log(FaslePosition("2*x-log(x)-7", 3, 4, 0.000002))