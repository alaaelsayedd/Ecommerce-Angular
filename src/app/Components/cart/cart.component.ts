import { Component } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  allCartItem: any = [];
  isLoading = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();  // Load cart items when component is initialized
  }

  // Method to load all cart items
  loadCartItems(): void {
    this.isLoading = true;
    this.cartService.getAllCartItem().subscribe((data) => {
      this.allCartItem = data;
      this.isLoading = false;
     
    });
  }

  // Method to remove an item from the cart
  removeCartItem(productId: number): void {
    this.cartService.removeCartItem(productId).subscribe((response) => {
    
      this.loadCartItems();  // Reload cart items after removal
    });
  }

  // Method to update the quantity of a cart item
  updateItemQuantity(productId: number, newQuantity: number): void {
    if (newQuantity <= 0) {
      return;
    }
    
    this.cartService.updateCartItemQuantity(productId, newQuantity).subscribe((response) => {
      this.loadCartItems();  // Reload cart items after updating quantity
    });
  }

  // Method to add a product to the cart (for demonstration)
  addProductToCart(productId: number): void {
    this.cartService.addCartItem(productId).subscribe((response) => {
      this.loadCartItems();  // Reload cart items after adding a product
    });
  }
}
