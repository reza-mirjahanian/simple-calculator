import {
  expect
} from "chai";
import InfixToPrefix from '../src/InfixToPrefix';
import Parser from '../src/Parser';


suite('Testing InfixToPrefix Class', () => {
  suite(':convert()', () => {
    test('should convert infix to prefix', async () => {
      const parser = new Parser()
      const toPrefix = new InfixToPrefix(parser)
      expect(toPrefix.convert('  ')).to.be.deep.equal([]);
      expect(toPrefix.convert('3 - -2')).to.be.deep.equal(['-', '3', '-2']);
      expect(toPrefix.convert('8/(4)')).to.be.deep.equal(['/', '8', '4']);
      expect(toPrefix.convert('( 2 + 3.33 )   ')).to.be.deep.equal(['+', '2', '3.33']);
      expect(toPrefix.convert('( 1 ) * 4   ')).to.be.deep.equal(['*', '1', '4']);
      expect(toPrefix.convert('( 1 ) * -4  ')).to.be.deep.equal(['*', '1', '-4']);
      expect(toPrefix.convert('6-1')).to.be.deep.equal(['-', '6', '1']);
    });

  });

});
