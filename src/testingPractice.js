function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
  let reversed = "";
  for (let i = 1; i <= str.length; i++) {
    reversed += str.charAt(str.length - i);
  }
  return reversed;
}

let calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

function caesarIndex(shift) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let shiftedAlphabet = [...alphabet];
  shiftedAlphabet.push(...shiftedAlphabet.splice(0, shift % 26));
  let index = {};
  for (let i = 0; i < 26; i++) {
    index[alphabet[i]] = shiftedAlphabet[i];
  }
  return index;
}

function caesar(str, shift) {
  let index = caesarIndex(shift);
  let result = "";
  for (const char of str) {
    if ("abcdefghijklmnopqrstuvwxyz".includes(char)) {
      result += index[char];
    } else if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(char)) {
      result += index[char.toLowerCase()].toUpperCase();
    } else {
      result += char;
    }
  }
  return result;
}

function analyzeArray(array) {
    let sum = array.reduce((total, curr) => total + curr, 0);
    return {
        average: sum / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length,
    }
}

export { capitalize, reverse, calculator, caesar, analyzeArray };
