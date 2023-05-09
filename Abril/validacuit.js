function ValidaCUIT(cuit) {
  // Eliminamos cualquier caracter innecesario o espacio en blanco del CUIT
  cuit = cuit.replace(/[\s]/g, '');

  // Verificamos que el CUIT tenga 11 dígitos
  if (cuit.length !== 11) {
    return false;
  }

  //todos los caracteres sean dígitos numéricos
  if (!/^\d+$/.test(cuit)) {
    return false;
  }

  //algoritmo modulo 11 --> para verificar digitos de validacion

  const digitoVerificador = cuit.charAt(10);
  const multiplicadores = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  let suma = 0;

  for (let i = 0; i < 10; i++) {
    suma += parseInt(cuit.charAt(i)) * multiplicadores[i];
  }

  const resto = suma % 11;
  const resultado = resto === 0 ? 0 : 11 - resto;

  if (parseInt(digitoVerificador) !== resultado) {
    console.log('Invalid CUIT');
    return false;
  }


  return true;
}


module.exports = ValidaCUIT;
