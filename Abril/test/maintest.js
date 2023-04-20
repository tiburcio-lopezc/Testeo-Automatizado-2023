const assert = require('assert');
const should = require('chai').should();
const expect = require('chai').expect;
const divide = require('../main');

describe('division', function() {
  it('devuelve el cociente de dos numeros', function() {
    assert.equal(divide(8, 2), 4);
    divide(10, 2).should.equal(5);
    expect(divide(12, 3)).to.equal(4);
  });

  it('division por cero', function() {
    assert.throws(() => { divide(5, 0) }, Error);
    should.throw(() => { divide(10, 0) });
    expect(() => { divide(15, 0) }).to.throw('No se puede dividir por cero');
  });

  it('devuelve valor decimal de ser necesario', function() {
    assert.equal(divide(5, 2), 2.5);
    divide(7, 2).should.be.closeTo(3.5, 0.01);
    expect(divide(9, 4)).to.be.closeTo(2.25, 0.01);
  });


  it('cociente de dos numeros negativos', function() {
    assert.equal(divide(-8, -2), 4);
    divide(-10, -2).should.equal(5);
    expect(divide(-12, -3)).to.equal(4);
  });

  it('divido cero por cualquier numero', function() {
    assert.equal(divide(0, 5), 0);
    divide(0, 10).should.equal(0);
    expect(divide(0, 15)).to.equal(0);
  });


it('debe manejar la división entre números con decimales', function() {
  assert.equal(divide(1.5, 0.5), 3);
  divide(3.5, 0.5).should.equal(7);
  expect(divide(4.8, 1.2)).to.equal(4);
});

});
