import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';

const dataSource = new ProductData('tents');
const element = document.querySelector('.product-list');
const listing = new ProductList('Tents', dataSource, element);

function productCategory(category){
  
  return `<a href="product-listing/index.html?product=${category.category}`
}



//function productCardTemplate(product) {
//   console.log(product);
//   console.log('hello2')
//   return `<li class="product-card">
//   <a href="product_pages/index.html?product=${product.Id}">
//   <img src="${product.Image}" alt="Image of ${product.Name}"/>
//   <h3 class="card__brand">${product.Brand.Name}</h3>
//   <h2 class="card__name">${product.Name}</h2>
//   <p class="product-card__price">$${product.FinalPrice}</p></a>
// </li>`
// }


listing.init();
