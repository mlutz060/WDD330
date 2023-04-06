import { renderListWithTemplate } from './utils.mjs';

function productCardTemplate(product) {
  return `<li class="product-card">
  <a href="/product_pages/index.html?product=${product.Id}">
  <img
    src="${product.Images.PrimaryMedium}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <div class="price-info">
    <p class="product-card__price">$${product.FinalPrice}</p>
    <p class="product-card__discount">You save $${Math.round(product.SuggestedRetailPrice - product.FinalPrice)}!</p>
  </div></a>
</li>`;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    // We passed in this information to make our class as reusable as possible.
    // Being able to define these things when we use the class will make it very flexible
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }
  async init() {
    // our dataSource will return a Promise...so we can use await to resolve it.
    const list = await this.dataSource.getData(this.category);
    // render the list
    this.renderList(list);
    //set the title to the current category
    document.querySelector('.title').innerHTML = this.category;
  }
  // render after doing the first stretch
  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
  async searchList(list) {
    let products = []

    searchInput.addEventListener("search", e => {
      const value = e.target.value
      list.forEach(product=> {
        const isVisible = list.Name.includes(value) || product.Name.includes(value)
      })
    } )
    .then(res => res.json())
    .then(data => {
      data.forEach(product =>{
        const card = productCardTemplate.contentcloneNode(true).children[0]
        const header = card.querySelector('.card__name')
        const body = card.querySelector('.product-card')
        header.textContent = product.
        body.textContent = product. 
        productCardTemplate.append(card)
        return { name: product.Name, image: product.Images.PrimaryMedium,
           price: product.FinalPrice, element: card}
      })
    })
  }
}
