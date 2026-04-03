// console.log("\n=== Деструктуризация массивов ===");
// const colors = ["red", "green", "blue"];
// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);
// const [primary, , tertiary] = colors;
// console.log(primary, tertiary);
// const [c1, c2, c3, c4 = "yellow"] = colors;
// console.log(c4);
// console.log("Деструктуризация объектов");
// const user = {
//   name: "Алиса",
//   age: 25,
//   city: "Москва",
// };
// const { name, age, city } = user;
// console.log(name, age, city);
// const { name: fullName, age: years } = user;
// console.log(fullName, years);
// const { name: personName, country = "Pоссия" } = user;
// console.log(personName, country);
// console.log("Деструктуризация в параметрах");
// function printUser({ name, age, city }) {
//   console.log(`Имя: ${name}`);
//   console.log(`Возраст: ${age}`);
//   console.log(`Город: ${city}`);
// }
// console.log();
// printUser(user);
const product = {
  name: "Молоко",
  price: 80,
  category: "Молочный продукт",
  inStock: true,
};
const { name, price, category, inStock } = product;
function printProduct({ name, price, category, inStock }) {
  console.log(`Название: ${name}`);
  console.log(`Цена: ${price}`);
  console.log(`Категория: ${category}`);
  console.log(`Наличие: ${inStock}`);
}
console.log();
printProduct(product);
