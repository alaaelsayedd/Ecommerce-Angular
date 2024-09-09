import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  allProducts: any;
  isLoading = false;
  constructor(
    private productList: ProductService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.isLoading = true;
    this.productList.getAllProducts().subscribe((data) => {
      this.allProducts = data;
      this.isLoading = false;
    });
  }
  addToCart(product: any): void {
    this.isLoading = true;
    this.cartService.addCartItem(product.id).subscribe(
      (response) => {
        this.isLoading = false;

        alert(`${product.title} has been added to the cart.`);
      },
      (error) => {
        this.isLoading = false;
        alert('Failed to add product to cart.');
      }
    );
  }
}
