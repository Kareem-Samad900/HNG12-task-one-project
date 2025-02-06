export const checkPrimeNumber = (number) => {
  // check prime number
  let isPrime = true;
  if (number === 0 || number === 1) {
    isPrime = false;
  }

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      isPrime = false;
    }
  }
  return isPrime;
};

export const checkPerfectNumber = (number) => {
  // Check perfect number
  let isPerfectNumber = false;
  if (number > 0) {
    let sumOfDivisors = 1;
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) {
        sumOfDivisors += i;
        if (i * i !== number) {
          sumOfDivisors += number / i;
        }
      }
    }
    isPerfectNumber = sumOfDivisors === number ? true : false;
  }
  return isPerfectNumber;
};

export const getSumOfDigits = (number) => {
  let sumOfDigits = 0;
  let digitsArray = number.toString().split("");

  if (number.length === 1) {
    sumOfDigits = number;
  } else {
    for (let i = 0; i < digitsArray.length; i++) {
      sumOfDigits += parseInt(digitsArray[i]);
    }
  }
  return sumOfDigits;
};
