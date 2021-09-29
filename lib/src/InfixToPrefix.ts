import {
  IParser
} from "./Types";


export default class InfixToPrefix {
  private mainStack: string[] = [];
  private stackPointer = -1;
  private _parser;

  constructor(strParser: IParser) {
    this._parser = strParser;
  }

  private push(c: string) {
    this.stackPointer++;
    this.mainStack[this.stackPointer] = c;
  }

  private pop() {
    if (this.stackPointer === -1)
      return '';
    else {
      let popped_ele = this.mainStack[this.stackPointer];
      this.stackPointer--;
      return popped_ele;
    }
  }

  private isOperator(c: string) {
    return (c === '+' || c === '-' || c === '#' || c === '*' || c === '/' || c === '(' || c === ')');
  }

  private getOrders(c: string) {
    if (c === '!' || c === '(' || c === ')') {
      return 1;
    } else if (c === '+' || c === '-') {
      return 2;
    } else if (c === '/' || c === '*') {
      return 3;
    } else if (c === '#') {
      return 4;
    } else
      return 0;
  }
  convert(expression: string): string[] {
    let prefix: string[] = [];
    let temp = 0;
    this.push('!');
    let expressionArray = this._parser.parse(expression);

    for (let i = expressionArray.length - 1; i >= 0; i--) {
      let el = expressionArray[i];
      if (this.isOperator(el)) {
        if (el === '(') {
          while (this.mainStack[this.stackPointer] !== ")") {
            prefix[temp++] = this.pop();
          }
          this.pop();
        } else if (el === ')') {
          this.push(el);
        } else if (this.getOrders(el) > this.getOrders(this.mainStack[this.stackPointer])) {
          this.push(el);
        } else {
          while (this.getOrders(el) <= this.getOrders(this.mainStack[this.stackPointer]) && this.stackPointer > -1) {
            prefix[temp++] = this.pop();
          }
          this.push(el);
        }
      } else {
        prefix[temp++] = el;
      }
    }
    while (this.mainStack[this.stackPointer] !== '!') {
      prefix[temp++] = this.pop();
    }


    return prefix.reverse();
  }

}
