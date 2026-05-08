//*********************Solution 1*********************
const filterEvenNumbers = (numbers: number[]): number[] => {
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  return evenNumbers;
};
//********************* Solution 2 *********************
const reverseString = (str: string): string => {
  const reverseStr = str.split("").reverse().join("");
  return reverseStr;
};

//********************* Solution 3 *******************
type StringOrNumber = string | number;
const checkType = (value: StringOrNumber): string => {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
};

//********************* Solution 4 *******************
const getProperty = <T extends object>(user: T, key: keyof T) => {
  return user[key];
};

//********************* Solution 5 *******************
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

interface ReadBook extends Book {
  isRead: boolean;
}

const toggleReadStatus = (book: Book): ReadBook => {
  return { ...book, isRead: true };
};

//********************* Solution 6 *******************
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    ((this.name = name), (this.age = age));
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade:${this.grade}`;
  }
}

//********************* Solution 7 *******************
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const newArr1 = [...set1];
  const commonNumbers = newArr1.filter((value) => set2.has(value));
  return commonNumbers;
};
