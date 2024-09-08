import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  allProducts: any;
  constructor(private productList: ProductService) {
  
  }
  ngOnInit(): void {
    this.productList.getAllProducts().subscribe((data) => {
      this.allProducts = data;
      console.log(data);
    });
  }
}
