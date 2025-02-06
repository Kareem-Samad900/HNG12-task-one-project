const checkNumberProperties = (number) => {
  // check if number is an armstrong number
  let numberProperties = [];

  let isArmstrong = false;
  let sum = 0;
  let valueOfnumber = number;
  let numberOfDigits = number.toString().length;
  // pass 0 as an armstrong number
  if (number === 0) {
    isArmstrong = true;
  }
  while (valueOfnumber > 0) {
    let remainder = valueOfnumber % 10;
    sum += remainder ** numberOfDigits;
    valueOfnumber = parseInt(valueOfnumber / 10);
  }
  isArmstrong = sum === number;

  // Check number properties
  if (number % 2 === 0 && isArmstrong) {
    numberProperties.push("armstrong", "even");
  } else if (number % 2 !== 0 && isArmstrong) {
    numberProperties.push("armstrong", "odd");
  } else if (number % 2 === 0 && !isArmstrong) {
    numberProperties.push("even");
  } else if (number % 2 !== 0 && !isArmstrong) {
    numberProperties.push("odd");
  }

  return numberProperties;
};

export default checkNumberProperties;
