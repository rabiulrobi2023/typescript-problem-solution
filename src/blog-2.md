# Generics
Generics in TypeScript allow you to write **reusable functions, classes, and components that work with different data types while still keeping strict type safety**.

They use a placeholder type (`T`) that is replaced by the actual type when the function is used.

### Example:

```
interface IStudentFixedInfo {
  name: string;
  roll: number;
}

const stuedentInfoFn = <T extends IStudentFixedInfo>(info: T) => {
  const schoolName = "ABC School";
  return {
    schoolName,
    ...info,
  };
};

  
const student1 = {
  name: "Rabiul Islam",
  roll: 1001,
  gender: "male",
};

const student2 = {
  name: "Sakib Hasan",
  roll: 2001,
  gender: "male",
  passportId: "PB23654",
  country: "Bangladesh",
};

const student3 = {
  name: "Nishad Rahman",
  gender: "male",
};
```

TypeScript automatically remembers the type, so:
- You get flexibility
- You get safety

### Simple idea:

> Generics let you write one piece of code that works for many types without losing type checking.