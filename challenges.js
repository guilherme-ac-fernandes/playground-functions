// Desafio 1 - OK
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2 - OK
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3 - OK
function splitSentence(string) {
  let splitString = string.split(' ');
  return splitString;
}

// Desafio 4 - OK
function concatName(array) {
  let reverse = `${array[array.length - 1]}, ${array[0]}`;
  return reverse;
}

// Desafio 5 - OK
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6 - OK
function highestCount(array) {
  let biggerNumber = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > biggerNumber) {
      biggerNumber = array[i];
    }
  }
  let count = 0;
  for (let j = 0; j < array.length; j += 1) {
    if (array[j] === biggerNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7 - OK
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8 - OK
function fizzBuzz(array) {
  let arrayFizzBuzz = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (array[i] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9 - OK
function encode(string) {
  let stringCode = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      stringCode += '1';
    } else if (string[i] === 'e') {
      stringCode += '2';
    } else if (string[i] === 'i') {
      stringCode += '3';
    } else if (string[i] === 'o') {
      stringCode += '4';
    } else if (string[i] === 'u') {
      stringCode += '5';
    } else {
      stringCode += string[i];
    }
  }
  return stringCode;
}

function decode(string) {
  let stringCode = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '1') {
      stringCode += 'a';
    } else if (string[i] === '2') {
      stringCode += 'e';
    } else if (string[i] === '3') {
      stringCode += 'i';
    } else if (string[i] === '4') {
      stringCode += 'o';
    } else if (string[i] === '5') {
      stringCode += 'u';
    } else {
      stringCode += string[i];
    }
  }
  return stringCode;
}

// Desafio 10
function techList(array) {
  // Explicação da utlização do sort para ordenar as string obtida na postagem da Banesa Guaderrama
  // source: https://dev.to/banesag/sorting-arrays-of-strings-in-javascript-2g11
  array.sort();
  if (array.length === 0) {
    return 'Vazio!';
  }
  let techArray = [];
  for (let i = 0; i < array.length; i += 1) {
    techArray.push({
      tech: array[i],
      name: 'Lucas',
    });
  }
  return techArray;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
