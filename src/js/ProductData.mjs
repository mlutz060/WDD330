const baseURL = 'https://wdd330-backend.onrender.com/'

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Bad Response');
  }
}

export default class ProductData {
  constructor(category) {

    this.category = category;
  }
  async getData(category) {
    console.log(category)
    const response = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(response);
    console.log(data);
    return data.Result;

  }
  async findProductById(id) {
    const response = await fetch(baseURL + `product/${id}`)
    const data = await convertToJson(response);
    return data.Result;
  }
}
