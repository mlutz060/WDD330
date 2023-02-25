import { getLocalStorage } from './utils.mjs';

async function renderCartContents() {
  const cartItems = getLocalStorage('so-cart');
  const htmlItems = await cartItems.map((item) => cartItemTemplate(item));
  document.querySelector('.product-list').innerHTML = htmlItems.join('');
  countCartContents();
}

function countCartContents(){
  const element = document.createElement('span');
  element.innerHTML = getLocalStorage('so-cart').length;
  const div = document.querySelector('.cartCount');
  div.appendChild(element);
}

// function shippingCost(){
//   const cartItems = getLocalStorage('so-cart');
//   for(let i = 10; i < cartItems.length; i + 2){

//   }
// }

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();

function calcSubtotal() {
  let subtotal = 0;
  const items = [getLocalStorage('so-cart')];
  console.log(items);
  items[0].forEach((item)=>{
    console.log(item.ListPrice);
    subtotal += item.ListPrice;
  })
  console.log('Subtotal: ' + subtotal);
  return subtotal;
}

function displaySubtotal() {
  const element = document.getElementById('subtotal');
  const subtotal = calcSubtotal();
  element.textContent = `Item Subtotal: $${subtotal}`;
}

if (getLocalStorage('so-cart').length > 0){
  displaySubtotal();
}