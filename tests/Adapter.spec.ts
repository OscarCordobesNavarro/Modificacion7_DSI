import 'mocha';
import {expect} from 'chai';
import {Adapter} from '../src/Adapter';
import {Rational} from '../src/Rational';
import { Complex } from '../src/Complex';

describe('Adapter class tests', () => {
    describe('Adapter class add method test', () => {
        it ('Adapter class add method test', () => {
            let racional = new Rational(1, 2);
            let adapter = new Adapter(racional);
            let complex = new Complex(3, 4);
            let result = adapter.add(complex);
            expect(result.getRealPart()).to.be.equal(3.5);
            expect(result.getImaginaryPart()).to.be.equal(4);
        });
        it ('Adapter class add method test', () => {
            let racional = new Rational(0, 2);
            let adapter = new Adapter(racional);
            let complex = new Complex(5, 0);
            let result = adapter.add(complex);
            expect(result).to.be.deep.equal(new Complex(5, 0));
        });
        it ('Adapter class add method test', () => {
            let racional = new Rational(0, 2);
            let adapter = new Adapter(racional);
            let complex = new Complex(0, 0);
            let result = adapter.add(complex);
            expect(result).to.be.deep.equal(new Complex(0, 0));
        });
    });

    describe('Adapter class subtract method test', () => {
        it ('Adapter class subtract method test', () => {
            let racional = new Rational(1, 2);
            let adapter = new Adapter(racional);
            let complex = new Complex(3, 4);
            let result = adapter.subtract(complex);
            expect(result.getRealPart()).to.be.equal(-2.5);
            expect(result.getImaginaryPart()).to.be.equal(-4);
        });
        it ('Adapter class subtract method test', () => {
            let racional = new Rational(0, 2);
            let adapter = new Adapter(racional);
            let complex = new Complex(5, 0);
            let result = adapter.subtract(complex);
            expect(result).to.be.deep.equal(new Complex(-5, 0));
        });
        it ('Adapter class subtract method test', () => {
            let racional = new Rational(0, 2);
            let adapter = new Adapter(racional);
            let complex = new Complex(0, 0);
            let result = adapter.subtract(complex);
            expect(result).to.be.deep.equal(new Complex(0, 0));
        });
    });
    
    describe('Adapter class multiply method test', () => {
        it ('Adapter class multiply method test', () => {
            let racional = new Rational(1, 2);
            let adapter = new Adapter(racional);
            let complex = new Complex(3, 4);
            let result = adapter.multiply(complex);
            expect(result.getRealPart()).to.be.equal(1.5);
            expect(result.getImaginaryPart()).to.be.equal(2);
        });
        it ('Adapter class multiply method test', () => {
            let racional = new Rational(0, 2);
            let adapter = new Adapter(racional);
            let complex = new Complex(5, 0);
            let result = adapter.multiply(complex);
            expect(result).to.be.deep.equal(new Complex(0, 0));
        });
        it ('Adapter class multiply method test', () => {
            let racional = new Rational(0, 2);
            let adapter = new Adapter(racional);
            let complex = new Complex(0, 0);
            let result = adapter.multiply(complex);
            expect(result).to.be.deep.equal(new Complex(0, 0));
        });
    });

    describe('Adapter class divide method test', () => {
        it ('Adapter class divide method test', () => {
            let racional = new Rational(1, 2);
            let adapter = new Adapter(racional);
            let complex = new Complex(3, 4);
            let result = adapter.divide(complex);
            expect(result.getRealPart()).to.be.equal(0.06);
            expect(result.getImaginaryPart()).to.be.equal(-0.08);
        });
        it ('Adapter class divide method test', () => {
            let racional = new Rational(0, 2);
            let adapter = new Adapter(racional);
            let complex = new Complex(5, 0);
            let result = adapter.divide(complex);
            expect(result).to.be.deep.equal(new Complex(0, 0));
        });
    });
});