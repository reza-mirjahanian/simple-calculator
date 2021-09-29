import { IParser } from "./Types";

export default class Parser implements IParser{

  private splitByWhiteSpace(str: string): string[] {
    return str.match(/[\S]+/g) || [];
  }

  private normalize(str: string) {
    let normalizedStr = '';
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char === '(') {
        normalizedStr += ' ( '
      } else if (char === ')') {
        normalizedStr += ' ) '
      } else if (char === '*') {
        normalizedStr += ' * '
      } else if (char === '/') {
        normalizedStr += ' / '
      } else if (char === '+') {
        normalizedStr += ' + '
      } else if (char === '-' && str[i + 1] === '(') {
        normalizedStr += ' # ( ';
        i++;
      } else {
        normalizedStr += char;
      }
    }
    normalizedStr = normalizedStr.replace(/([\d|)]\s*)-/g, "$1 - "); //1-1 1 - 1
    return normalizedStr;
  }

  parse(str: string): string[] {
    if (str && (typeof str === 'string')) {
      let normalized = this.normalize(str);
      return this.splitByWhiteSpace(normalized);
    }else{
      return []
    }
  }
}
