# `any` type, `unknown` type, and type narrowing

### `any` type:
The type `any` is a special type in TypeScript that disables type checking for a variable.
That means you can assign any type of data to the variable.
For example:

```
let city:any = "Dhaka";
city.toUpperCase(); //No error
city.toLocaleLowerCase(); //No error
```

But "Dhaka" is not to same "DHAKA" or "dhaka"\
So your program may crash later.\
**That's why `any` is called a type safety hole.**

## `unknown` type:
It is a safer version of `any`. That means you don't know the type yet, but you do not allow to use the value directly until you check its type.\
For example:
```
let district: unknown = "Dinajpur"
district.toUpperCase() //❌Error
```
So `unknown` type is safer than `any` type.

## Type Narrowing:
Type narrowing is the process to reducing a board type into a more specific type.\
Example:
```
type StringOrNumber = string | number;
const checkType = (value: StringOrNumber): string => {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
};
```
Here:
- value start `string|number`
- Inside the if block `typeof value === string` narrows the value to string.
- The else block the narrows the value to number.
- Inside the if block `typeof value === string` narrows the value to string.
- The else block the narrows the value to number.