import { loadHeaderFooter, getParam } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import Alert from "./Alert.mjs";
import alerts from '../json/alerts.json';

console.log(alerts);

console.log('this is a test message');

loadHeaderFooter();
const category = getParam("category");
const dataSource = new ExternalServices();
const element = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, element);
const alertList = new Alert(alerts);

listing.init();
alertList.init();