const fizzbuzz = function (number) {
  const divisible = (number, divisor) => {
    return number % divisor === 0;
  };
  if (number === 0) {
    return number; //console.log
  }
  if (divisible(number, 3) && divisible(number, 5)) {
    return "FizzBuzz";
  }
  if (divisible(number, 5)) {
    return "Fizz";
  }
  if (divisible(number, 5)) {
    return "Buzz";
  }
  return number;
};
const print = () => {
  for (let i = 0; i <= 35; i++) {
    console.log(fizzbuzz(i));
  }
};
print();
