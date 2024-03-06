import 'mocha';
import {expect} from 'chai';
import {Complex} from '../src/Complex';

describe('Complex class that implements Arithmeticable interface tests', () => {
    it ('Complex class add method test', () => {
        let complex1 = new Complex(1, 2);
        let complex2 = new Complex(3, 4);
        let result = complex1.add(complex2);
        expect(result).to.be.deep.equal(new Complex(4, 6));
    });

    it('Complex class subtract method test', () => {
        let complex1 = new Complex(1, 2);
        let complex2 = new Complex(3, 4);
        let result = complex1.subtract(complex2);
        expect(result).to.be.deep.equal(new Complex(-2, -2));
    });

    it('Complex class multiply method test', () => {
        let complex1 = new Complex(1, 2);
        let complex2 = new Complex(3, 4);
        let result = complex1.multiply(complex2);
        expect(result).to.be.deep.equal(new Complex(-5, 10));
    });

    it('Complex class divide method test', () => {
        let complex1 = new Complex(1, 2);
        let complex2 = new Complex(3, 4);
        let result = complex1.divide(complex2);
        expect(result).to.be.deep.equal(new Complex(0.44, 0.08));
    });

    it('Complex to string test', () => {
        let complex1 = new Complex(1, 2);
        expect(complex1.toString()).to.be.equal("1 + 2i");
    });
});