import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartItemCount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItemCount = this.cartService.getCartItems().length;
  }
}
