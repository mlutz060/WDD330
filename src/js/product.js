import ProductData from './ProductData.mjs';
import { setLocalStorage, getParam } from './utils.mjs';

const dataSource = new ProductData('tents');

const productId = getParam('product');

console.log(dataSource.findProductById(productId));

function addProductToCart(product) {
  setLocalStorage('so-cart', product);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);
