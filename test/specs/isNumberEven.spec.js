/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable max-len */

const NumbersValidator = require('../../app/numbers_validator');
const { expect } = require('chai');

describe('isNumberEven positive scenarios', function () {
	let validator;
	beforeEach(function () {
		validator = new NumbersValidator();
	});
	afterEach(function () {
		validator = null;
	});
	it('should return true if number is even', function () {
		expect(validator.isNumberEven(4)).to.be.equal(true);
	});
	it('should return false if number is odd', function () {
		expect(validator.isNumberEven(5)).to.be.equal(false);
	});
	it('chai test', function () {
		expect(5).to.be.equal(5);
		expect(5).to.be.below(55);
		expect(5).to.be.above(1);
		expect({ a: 'apple', b: 43 }).to.have.property('a');
		// т.к. мы сравниваем массивы и обьекты то надо использовать eql вместо equal
		expect({ a: 'apple', b: 43 }).to.be.eql({ a: 'apple', b: 43 });
		expect([1, 'apple']).to.be.eql([1, 'apple']);
		expect([1, 'apple']).to.have.lengthOf(2);
	});
});
