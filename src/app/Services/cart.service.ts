import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  // Get all cart items
  getAllCartItem(): Observable<any> {
    return this.http.get<any>(`http://localhost:3004/cart`);
  }

  // Remove a cart item
  removeCartItem(productId: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:3004/cart/${productId}`);
  }

  // Add a product to the cart
  addCartItem(productId: number): Observable<any> {
    return this.http.post<any>(`http://localhost:3004/cart/${productId}`, {});
  }

  // Update product quantity in the cart
  updateCartItemQuantity(productId: number, quantity: number): Observable<any> {
    return this.http.put<any>(`http://localhost:3004/cart/${productId}`, {
      quantity,
    });
  }
}
