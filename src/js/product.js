import ProductData from './ProductData.mjs';
import ProductDetails from './productDetails.mjs';
import { getParam, loadHeaderFooter } from './utils.mjs';

loadHeaderFooter();

const dataSource = new ProductData('tents');
const productId = getParam('product');

const product = new ProductDetails(productId, dataSource);
product.init();
