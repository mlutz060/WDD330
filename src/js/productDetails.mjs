import { setLocalStorage } from "./utils.mjs";

export default class ProductDetails {

    constructor(productId, dataSource) {
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }

    async init() {
        // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
        this.product = await this.dataSource.findProductById(this.productId);
        // once we have the product details we can render out the HTML
        this.renderProductDetails;
        // once the HTML is rendered we can add a listener to Add to Cart button
        // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
        document.getElementById('addToCart')
                .addEventListener('click', this.addToCart.bind(this));
      }

    addProductToCart() {
        setLocalStorage('so-cart', this.product);
    }

    renderProductDetails() {
        const itemDetails = `<h3>${this.product.Brand.Name}</h3>
        <h2 class='divider'>${this.product.NameWithoutBrand}</h2>`;

        console.log(itemDetails);

        const element = document.querySelector(main);
        element.insertAdjacentHTML("afterBegin", itemDetails);
    }
}