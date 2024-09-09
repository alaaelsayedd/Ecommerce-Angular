import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  productData: any;
  id!: number;

  constructor(
    private Allproduct: ProductService,
    private cartService:CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Retrieve the product ID from the route parameters
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    // Fetch product data using the service
    this.Allproduct.getProductById(this.id).subscribe((data) => {
      this.productData = data;

      // Ensure the productData is logged for debugging
      console.log(this.productData);
    });
  }
  addToCart(product: any): void {
   
    this.cartService.addCartItem(product.id).subscribe(
      (response) => {
       

        alert(`${product.title} has been added to the cart.`);
      },
      (error) => {
      
        alert('Failed to add product to cart.');
      }
    );
  }
}