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

//unions

function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");

//intersection
type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//Literal (exact,specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "ince";

//Nullable types
function greet(name: string | null) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola");
}
greet(null);
