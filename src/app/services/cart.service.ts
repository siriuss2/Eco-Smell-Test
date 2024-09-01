import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>(this.getInitialCartItems());
  cartItems$ = this.cartItems.asObservable();

  private cartItemCount = new BehaviorSubject<number>(this.getInitialCartItems().length);
  cartItemCount$ = this.cartItemCount.asObservable();

  private getInitialCartItems(): any[] {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  }

  addToCart(product: any): void {
    const currentCartItems = this.cartItems.value;
    const existingProduct = currentCartItems.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += product.quantity; // Increment the quantity
    } else {
      currentCartItems.push({ ...product, quantity: product.quantity || 1 }); // Add new product with quantity 1 if not provided
    }

    this.cartItems.next(currentCartItems);
    this.cartItemCount.next(currentCartItems.length);  // Update the cart count
    localStorage.setItem('cartItems', JSON.stringify(currentCartItems));
  }

  getCartItems(): any[] {
    return this.cartItems.value;
  }

  removeFromCart(product: any): void {
    const updatedCartItems = this.cartItems.value.filter(item => item.id !== product.id);
    this.cartItems.next(updatedCartItems);
    this.cartItemCount.next(updatedCartItems.length);  // Update the cart count
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  }
}
