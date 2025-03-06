class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price; 
    this.isActive = true;
  }

  archive() {
    if (this.isActive) {
      this.isActive = false;
    }
    return this;
  }

  updatePrice(newPrice) {
    this.price = newPrice;
    return this;  
  }
}

class Cart {
  constructor() {
    this.contents = []; 
    this.totalAmount = 0;
  }

  addToCart(product, quantity) {
    this.contents.push({ product, quantity });
    return this;
  }

  showCartContents() {
    return this.contents;
  }

  updateProductQuantity(productName, newQuantity) {
    const productInCart = this.contents.find(item => item.product.name === productName);
    if (productInCart) {
      productInCart.quantity = newQuantity; 
    }
    return this;
  }

  clearCartContents() {
    this.contents = []; 
    this.totalAmount = 0; 
    return this;
  }

  computeTotal() {
    this.totalAmount = this.contents.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
    return this;
  }
}

class Customer {
  constructor(email) {
    this.email = email; 
    this.cart = new Cart(); 
    this.orders = []; 
  }

  checkOut() {
    if (this.cart.contents.length > 0) { 
      this.cart.computeTotal(); 
      this.orders.push({
        products: this.cart.contents,
        totalAmount: this.cart.totalAmount
      }); 

      this.cart.clearCartContents();
      return this;
    } else {
      return this;
    }
  }
}

//test code
const john = new Customer('john@mail.com')

const prodA = new Product('soap', 9.99)
const prodB = new Product('shampoo', 12.99)
const prodC = new Product('toothbrush', 4.99)
const prodD = new Product('toothpaste', 14.99)