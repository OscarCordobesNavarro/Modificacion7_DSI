import 'mocha';
import {expect} from 'chai';
import {Rational} from '../src/Rational';

describe('Rational class that implements Arithmeticable interface tests', () => {
    it ('Rational class add method test', () => {
        let rational1 = new Rational(1, 2);
        let rational2 = new Rational(3, 4);
        let result = rational1.add(rational2);
        expect(result).to.be.deep.equal(new Rational(5, 4));
    });

    it('Rational class subtract method test', () => {
        let rational1 = new Rational(1, 2);
        let rational2 = new Rational(3, 4);
        let result = rational1.subtract(rational2);
        expect(result).to.be.deep.equal(new Rational(1, -4));
    });

    it('Rational class multiply method test', () => {
        let rational1 = new Rational(1, 2);
        let rational2 = new Rational(3, 4);
        let result = rational1.multiply(rational2);
        expect(result).to.be.deep.equal(new Rational(3, 8));
    });

    it('Rational class divide method test', () => {
        let rational1 = new Rational(1, 2);
        let rational2 = new Rational(3, 4);
        let result = rational1.divide(rational2);
        expect(result).to.be.deep.equal(new Rational(2, 3));
    });

    it('Rational denominator 0 test', () => {
        expect(() => new Rational(1, 0)).to.throw('El denominador no puede ser 0');
    });
});
