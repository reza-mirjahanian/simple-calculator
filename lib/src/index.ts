import Parser from "./Parser";
import InfixToPrefix from "./InfixToPrefix";
import PreFixCalc from "./PreFixCalc";


const parser = new Parser()
const toPrefix = new InfixToPrefix(parser);
const calc = new PreFixCalc();

//
const prefix1 = toPrefix.convert('2+3+3  ');
console.log(calc.run(prefix1)); // 8

//
const prefix2 = toPrefix.convert('2+3-3 ');
console.log(calc.run(prefix2)); // 2

//
const prefix3 = toPrefix.convert('5 / 2 - 3');
console.log(calc.run(prefix3)); //  -0.5
