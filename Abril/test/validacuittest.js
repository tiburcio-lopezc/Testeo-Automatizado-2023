const assert = require('assert');
const { expect } = require('chai');
const sinon = require('sinon');
const ValidaCUIT = require('../validacuit');
//const ValidaCUITstub = require('../validacuitstub')
// Pruebas unitarias
describe('ValidaCUIT', function() {
  

    it('Cuit invalido', function() {
        assert.equal(ValidaCUIT('20353773881'), false);
        expect(ValidaCUIT('20353773881')).to.be.false;
    });

    it('Cuit vacio devuelve false', function() {
        assert.strictEqual(ValidaCUIT(''), false);
        expect(ValidaCUIT('')).to.be.false;
    });

    it('Devuelve true al tener digito no numerico válido como guion', function() {
        assert.strictEqual(ValidaCUIT('20-35377388-0'), false);
        expect(ValidaCUIT('20-35377388-0')).to.be.false;
    });

    it('cuit con un caracter de más es invalido', function() {
        assert.strictEqual(ValidaCUIT('203537738800'), false);
        expect(ValidaCUIT('203537738800')).to.be.false;
    });



    it('El digito de verificacion de cuit es invalido', function() {
        assert.strictEqual(ValidaCUIT('20353773881'), false);
        expect(ValidaCUIT('20353773881')).to.be.false;
    });
    
    it('Cuit invalido incluye letra', function() {
    assert.equal(ValidaCUIT('20123456789a'), false);
    expect(ValidaCUIT('20123456789a')).to.be.false;
    });


it('Muestra un console log cada vez que haya un CUIT invalido', function() {
  const consoleLogStub = sinon.stub(console, 'log');
  ValidaCUIT('20353773881');
  sinon.assert.calledWithExactly(consoleLogStub, 'Invalid CUIT');
  consoleLogStub.restore();
});

it('digito de verificacion es invalido', function() {
    assert.strictEqual(ValidaCUIT('20353773881'), false);
    expect(ValidaCUIT('20353773881')).to.be.false;
  });


   it('Cuit no puede incluir espacios', function() {
    assert.strictEqual(ValidaCUIT('20 35377388 0'), false);
    expect(ValidaCUIT('20 35377388 0')).to.be.false;
  });

  it('CUIT empieza con ceros', function() {
    assert.strictEqual(ValidaCUIT('00123456789'), false);
    expect(ValidaCUIT('00123456789')).to.be.false;
  });
});

