/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i < array.length; i += 1) {
    let count = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        count += 1;
      }
      if (count >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let phoneNumber = '';
  for (let i = 0; i < array.length; i += 1) {
    if (i === 0) {
      phoneNumber = `${phoneNumber}(${array[i]}`;
    } else if (i === 1) {
      phoneNumber = `${phoneNumber + array[i]}) `;
    } else if (i === 2 || i === 3 || i === 4 || i === 5) {
      phoneNumber += array[i];
    } else if (i === 6) {
      phoneNumber = `${phoneNumber + array[i]}-`;
    } else if (i === 7 || i === 8 || i === 9 || i === 10) {
      phoneNumber += array[i];
    }
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let condicionalA = Math.abs(lineB - lineC) < lineA && lineA < (lineB + lineC);
  let condicionalB = Math.abs(lineA - lineC) < lineB && lineB < (lineA + lineC);
  let condicionalC = Math.abs(lineA - lineB) < lineC && lineC < (lineA + lineB);
  return condicionalA && condicionalB && condicionalC;
}

// Desafio 13
function hydrate(string) {
  string = string.split('');
  let count = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '1') {
      count += 1;
    } else if (string[i] === '2') {
      count += 2;
    } else if (string[i] === '3') {
      count += 3;
    } else if (string[i] === '4') {
      count += 4;
    } else if (string[i] === '5') {
      count += 5;
    } else if (string[i] === '6') {
      count += 6;
    } else if (string[i] === '7') {
      count += 7;
    } else if (string[i] === '8') {
      count += 8;
    } else if (string[i] === '9') {
      count += 9;
    }
  }
  if (count === 1) {
    return `${count} copo de água`;
  }
  return `${count} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
