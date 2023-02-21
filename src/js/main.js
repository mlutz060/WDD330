import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';


const dataSource = new ProductData('tents');
const element = document.querySelector('.product-list');
const listing = new ProductList('Tents', dataSource, element);


listing.init();


// const item = document.getElementById('addToCart');
// item.addEventListener('click', test);

// document.getElementById('addToCart').onclick = animation();