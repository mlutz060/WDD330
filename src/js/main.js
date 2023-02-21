

const dataSource = new ProductData('tents');
const element = document.querySelector('.product-list');
const listing = new ProductList('Tents', dataSource, element);
import { loadHeaderFooter } from './utils.mjs';

listing.init();

// const item = document.getElementById('addToCart');
// item.addEventListener('click', test);

// document.getElementById('addToCart').onclick = animation();
loadHeaderFooter();
