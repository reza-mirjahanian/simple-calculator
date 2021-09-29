import {
  expect
} from "chai";
import Parser from '../src/Parser';


suite('Testing Parser Class', () => {
  suite(':parse()', () => {
    test('should parse string of chars correctly', async () => {
      const parser = new Parser()
      expect(parser.parse('  ')).to.be.deep.equal([]);
      expect(parser.parse('1 - 1')).to.be.deep.equal(['1', '-', '1']);
      expect(parser.parse('  1  -  1  ')).to.be.deep.equal(['1', '-', '1']);
      expect(parser.parse('6 +  -( -4)')).to.be.deep.equal(['6', '+', '#', '(', '-4', ')']);
      expect(parser.parse('6 +  -( -4)')).to.be.deep.equal(['6', '+', '#', '(', '-4', ')']);
      expect(parser.parse('-(-3) +  -( -4)')).to.be.deep.equal([
        '#', '(', '-3',
        ')', '+', '#',
        '(', '-4', ')'
      ]);
      expect(parser.parse('-(1)')).to.be.deep.equal(['#', '(', '1', ')']);
      expect(parser.parse('(-2)')).to.be.deep.equal(['(', '-2', ')']);
      expect(parser.parse('6 + (0 + -4)')).to.be.deep.equal(['6', '+', '(', '0', '+', '-4', ')']);
      expect(parser.parse('6 + ( -4)')).to.be.deep.equal(['6', '+', '(', '-4', ')']);
      expect(parser.parse('-2')).to.be.deep.equal(['-2']);

    });


  });



});