import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  addToCart(product: any): void {
    this.cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
  
  getCartItems(): any[] {
    const savedCartItems = localStorage.getItem('cartItems');
    this.cartItems = savedCartItems ? JSON.parse(savedCartItems) : [];
    return this.cartItems;
  }

  removeFromCart(product: any): void {
    this.cartItems = this.cartItems.filter(item => item.id !== product.id);
  }
  
}
