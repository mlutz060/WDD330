import ProductData from './ProductData.mjs';
import ProductDetails from './productDetails.mjs';
import { getParam } from './utils.mjs';

const dataSource = new ProductData('tents');
const productId = getParam('product');

const product = new ProductDetails(productId, dataSource);
product.init();


// function addProductToCart(product) {
//   setLocalStorage('so-cart', product);
// }
// add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById('addToCart')
//   .addEventListener('click', addToCartHandler);
