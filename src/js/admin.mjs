// async function login(){
//   await fetch('http://server-nodejs.cit.byui.edu:3000/login', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: `{
      
//     }`
//   })
// }

import ExternalServices from "./ExternalServices.mjs";
import { alertMessage } from "./utils.mjs";

export default class Admin {

  constructor(outputSelector) {
    this.mainElement = document.querySelector(outputSelector);
    this.token = null;
    this.services = new ExternalServices();
  }

  async login(creds, next) {
    // I built the login method with a callback: next. 
    // This makes it much more flexible...
    // there could be many different things the user wants to do after logging in...
    // this allows us that flexibility without having to write a bunch of login methods
    try {
      this.token = await this.services.loginRequest(creds);
      next()
    } 
    catch(err) {
      // remember this from before?
      alertMessage(err.message.message);
    }
  }

  showLogin(){
    this.mainElement.innerHTML = loginFormTemplate();
    document.querySelector('#loginButton').addEventListener('click', (e) => {
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
      this.login({ email, password }, this.showOrders.bind(this));
    });
    // const element = document.querySelector('main');
    // const html = `<form action="${this.login()}" method="post">
    //   <label for="email">Email: </label>
    //   <br>
    //   <input type="text" name="email" id="email">
    //   <br>
    //   <label for="password">Password: </label>
    //   <br>
    //   <input type="text" name="password" id="password">
    //   <button type="submit">Login</button>
    // </form>`;
    // element.innerHTML = html;
  }

  async showOrders() {
    try {
      const orders = await this.services.getOrders(this.token);
      this.mainElement.innerHTML = orderTemplate();
      const parent = document.querySelector('#orders tbody');
      parent.innerHTML = orders
        .map(
          (order) =>
            `<tr><td>${order.id}</td><td>${new Date(
              order.orderDate
            ).toLocaleDateString('en-US')}</td><td>${
              order.items.length
            }</td><td>${order.orderTotal}</td></tr>`
        )
        .join('');
    } catch (err) {
      console.log(err);
    }
  }
}

function loginFormTemplate() {
  return `<fieldset class="login-form">
  <legend>Login</legend>
  <p>
    <label for="email">Email</label>
    <input type="text" placeholder="email" id="email" value="user1@email.com"/>
  </p>
  <p>
    <label for="password">Password</label>
    <input type="password" placeholder="password" id="password" />
  </p>
  <button type="submit" id="loginButton">Login</button>
</fieldset>`;
}
// test
function orderTemplate() {
  return `<h2>Current Orders</h2>
  <table id="orders">
  <thead>
  <tr><th>Id</th><th>Date</th><th>#Items</th><th>Total</th>
  </thead>
  <tbody class="order-body"></tbody>
  </table>
  `;
}