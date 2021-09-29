import {
  expect
} from "chai";
import Parser from '../src/Parser';
import InfixToPrefix from '../src/InfixToPrefix';
import PreFixCalc from '../src/PreFixCalc';


suite('Testing Parser Class', () => {
  suite(':parse()', () => {
    test('should parse string of chars correctly', async () => {
      const parser = new Parser()
      const toPrefix = new InfixToPrefix(parser);
      const calc = new PreFixCalc();

      let prefix1 = toPrefix.convert('3 - -2');
      expect(calc.run(prefix1)).to.be.deep.equal(5);

      const prefix2 = toPrefix.convert('8/(4)');
      expect(calc.run(prefix2)).to.be.deep.equal(2);

      const prefix3 = toPrefix.convert('( 2 + 3.33 )   ');
      expect(calc.run(prefix3)).to.be.deep.equal(5.33);

      const prefix4 = toPrefix.convert('( 1 ) * 4   ');
      expect(calc.run(prefix4)).to.be.deep.equal(4);

      const prefix5 = toPrefix.convert('2+3+3  ');
      expect(calc.run(prefix5)).to.be.deep.equal(8);

      const prefix6 = toPrefix.convert('2+3-3 ');
      expect(calc.run(prefix6)).to.be.deep.equal(2);

      const prefix7 = toPrefix.convert('5 / 2 - 3');
      expect(calc.run(prefix7)).to.be.deep.equal(-0.5);

    });


  });



});