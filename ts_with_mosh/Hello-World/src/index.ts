// tuple
// let user: [number, string] = [1, "2"];

//enums
/*const small = 1;
const medium =2;
const large =3;
enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);*/

//function
function calculateTax(income: number, taxYear?: number): number {
  if ((taxYear || 2022) < 2022) return income * 1.2;
  return income * 1.3;
}
calculateTax(10_000);

//objects
let employees: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "sojib",
  retire: (date) => {
    console.log(date);
  },
};

//type Aliases
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
let employee: Employee = {
  id: 1,
  name: "sojib",
  retire: (date) => {
    console.log(date);
  },
};
