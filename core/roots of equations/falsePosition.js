import evaluate from 'evaluator.js';

const err = msg => { throw Error(msg) }

function FaslePosition(equation, negValue = err("Required negValue and f(val) must be negative"), posValue = err("Required posValue and f(val) must be a positive number"), tolerance = err("Required tolerance")) {

}