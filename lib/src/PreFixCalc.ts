export default class PreFixCalc {
  private calc(operator: string, num1: number, num2: number): number {
    if (operator === '+') {
      return num1 + num2;
    } else if (operator === '-') {
      return num1 - num2
    } else if (operator === '*') {
      return num1 * num2
    } else if (operator === '/') {
      if (num2 > 0) {
        return (num1 / num2)
      }
    }
    return 0;
  }


  private isValidNumber(string = '') {
    if (string === '0') {
      return false;
    }

    if (string.length > 1 && string[0] === '-') {
      string = string.slice(1)
    }

    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) === 46) { // '.'
        continue;
      }
      if (string.charCodeAt(i) < 48 || string.charCodeAt(i) > 57) {
        return false;
      }
    }
    return true;
  }

  /**
   * Accept prefix array of string and return final calc as a number
   * @param {string[]} chars
   * @return {number}
   */
  run(chars: string[]): number {
    const stack: number[] = [];
    let i = chars.length - 1;
    for (i; i >= 0; i--) {
      const char = chars[i];
      if (this.isValidNumber(char)) { // 1 2 43 404
        stack.push(Number(char))
      } else if (['+', '/', '-', '*'].includes(char) && stack.length >= 2) {
        const num1 = stack.pop();
        const num2 = stack.pop();
        let result = 0;
        if (num1 !== undefined && num2 !== undefined) {
          result = this.calc(char, num1, num2);
        }

        if (result !== null) {
          stack.push(result)
        }
      } else if (char === '#' && stack.length > 0) {
        const num1 = stack.pop();
        if (num1 !== undefined) {
          stack.push(-1 * num1)
        }

      }
    }

    if (stack.length === 1) {
      return stack[0];
    }

    return 0;
  }


}
