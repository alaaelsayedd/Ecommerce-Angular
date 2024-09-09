import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../Services/cart.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, RouterLink, NgClass],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchResult: any[] = [];
  products: any[] = [];
  searchVal: string = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getSearchedProduct('');
  }

  set searchValue(val: string) {
    this.searchVal = val;
    this.getSearchedProduct(this.searchVal);
  }

  getSearchedProduct(name: string): void {
    this.productService.getAllProducts().subscribe((data: any[]) => {
      this.products = data;
      this.searchResult = this.products.filter((product) =>
        product.title.toLowerCase().includes(name.toLowerCase())
      );
    });
  }

  addToCart(product: any): void {
    this.cartService.addCartItem(product.id).subscribe(
      () => {
        alert(`${product.title} has been added to the cart.`);
      },
      () => {
        alert('Failed to add product to cart.');
      }
    );
  }
}
