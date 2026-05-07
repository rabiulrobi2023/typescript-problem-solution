//*********************Solution 1*********************
const filterEvenNumbers = (numbers: number[]): number[] => {
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  return evenNumbers;
};

//*********************Solution 2*********************

const reverseString = (str: string) => {
  const strArray = str.split("");
  let reverseArray: string[] = [];
  strArray.map((value) => reverseArray.unshift(value));

  const res: string = reverseArray.join().concat(",");
  return res;
};
