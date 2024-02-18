/* catching bugs */

function calculate_total_price(
  product: { name: string; unitPrice: number },
  quantity: number,
  discount: number
) {
  const price_without_discount = product.unitPrice * quantity;
  const discount_amount = price_without_discount * discount;
  return price_without_discount - discount_amount;
}

/* Using type annotations */
let unit_price: number;
unit_price = 4;

function get_total(
  product: { name: string; unitPrice: number },
  quantity: number,
  discount: number
): number {
  const price_without_discount = product.unitPrice * quantity;
  const discount_amount = price_without_discount * discount;
  return price_without_discount - discount_amount;
}
// let total: string = get_total(500, "one", 0.1);

/* unknown types */
fetch("https://swapi.dev/api/people/1")
  .then((response) => response.json())
  .then((data: unknown) => {
    if (is_character(data)) {
      console.log("name", data.name);
    }
  });
function is_character(character: any): character is { name: string } {
  return "name" in character;
}

/* interface */
interface Purchase {
  (quantity: number): void;
}
interface Product {
  name: string;
  unit_price?: number;
  purchase: Purchase;
}
let table: Product = {
  name: "Table",
  purchase: (quantity) => console.log(`Purchased ${quantity} tables`),
};
table.purchase(4);
let chair: Product = { name: "Chair", unit_price: 40 };

interface Discounted_product extends Product {
  discount: number;
}
let chair_on_sale: Discounted_product = {
  name: "Chair on Sale",
  unit_price: 30,
  discount: 5,
};
