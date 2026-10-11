const data = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

const trimmed = data.trim();
const names = trimmed.split(",");
const cleanNames = names.map(name => name.trim().toLowerCase());
const result = cleanNames.join(" | ");

console.log(result);

const products = [{ name: 'Laptop', price: 1000, active: true }, { name: 'Mouse', price: 20, active: false }, { name: 'Keyboard', price: 50, active: true }];

const activeProducts = products.filter(product => product.active === true);
const productNames = activeProducts.map(product => product.name.toUpperCase());
const totalPrice = activeProducts.reduce((total, product) => total + product.price, 0);

console.log(productNames);
console.log(totalPrice);