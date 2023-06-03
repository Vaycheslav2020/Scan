export default function handleHelpINN(value) {
  let result = false;
  if (!value.length) {
    return "Введите корректные данные";
  } else if (/[^0-9]/.test(value)) {
    return "Введите корректные данные";
  } else if ([10, 12].indexOf(value.length) === -1) {
    return "Введите корректные данные";
  } else {
    const checkDigit = function (value, coefficients) {
      let n = 0;
      for (let i in coefficients) {
        n += coefficients[i] * value[i];
      }
      return parseInt((n % 11) % 10);
    };
    switch (value.length) {
      case 10:
        let n10 = checkDigit(value, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
        if (n10 === parseInt(value[9])) {
          result = true;
        }
        break;
      case 12:
        let n11 = checkDigit(value, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
        let n12 = checkDigit(value, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
        if (n11 === parseInt(value[10]) && n12 === parseInt(value[11])) {
          result = true;
        }
        break;
    }
    if (!result) {
      return "Введите корректные данные";
    }
  }
  return result;
}
