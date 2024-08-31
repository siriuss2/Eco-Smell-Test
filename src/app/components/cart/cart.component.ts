import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from 'emailjs-com'; // Import EmailJS

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  order = {
    name: '',
    email: '',
    address: '',
    city: '',
  };

  // EmailJS configuration
  private readonly EMAILJS_SERVICE_ID = 'service_4ygobu4'; // Replace with your EmailJS Service ID
  private readonly EMAILJS_TEMPLATE_ID = 'template_8ltlu54'; // Replace with your EmailJS Template ID
  private readonly publicKey = 'SFcimWfSt5kqtMLP5'; // Replace with your EmailJS User ID

  showNotification: boolean = false;
  showErrorNotification: boolean = false; // Add this flag

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    console.log('Cart items on load:', this.cartItems); // This should log the cart items
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  removeFromCart(item: any): void {
    // Find the index of the item in the cart using a unique identifier
    const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
  
    if (index !== -1) {
      // Remove the item from the cart array
      this.cartItems.splice(index, 1);
      
      // Update the local storage with the new cart items array
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }

  submitOrder(form: NgForm): void {
    if (form.invalid) {
      this.showErrorNotification = true; // Show error notification if form is invalid
      return;
    }

    this.showErrorNotification = false; // Hide error notification if form is valid

    const emailData = {
      to_name: this.order.name, // Recipient's name
      from_name: this.order.email, // Your name or company name
      message: `
        Име: ${this.order.name}
        Адреса: ${this.order.address}
        Град: ${this.order.city}
        Производи:
        ${this.cartItems.map(item => `${item.category} - ${item.quantity} x ${item.price} ден.`).join('\n')}
        Вкупна цена за плаќање: ${this.getTotalPrice()} денари
      `
    };

    emailjs.send(this.EMAILJS_SERVICE_ID, this.EMAILJS_TEMPLATE_ID, emailData, this.publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
        this.orderNow(); // Show the notification on successful order
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Handle error (e.g., show an error message)
      });
  }

  orderNow() {
    this.showNotification = true;

    // Hide the notification after 3 seconds
    setTimeout(() => {
      this.showNotification = false;
    }, 3000);
  }
}
