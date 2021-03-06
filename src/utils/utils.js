function getNumeros(length) {
  const numeros = [];
  for (let i = 0; i < length; ) {
    numeros.push(String(++i));
  }
  return numeros;
}

function getRandomInRange(max) {
  return Math.floor(Math.random() * max);
}

function capitalize(s) {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function compareLikeNumber(numberA, numberB) {
  return Number(numberA) - Number(numberB);
}

export { getNumeros, getRandomInRange, capitalize, compareLikeNumber };
