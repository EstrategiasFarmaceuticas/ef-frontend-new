import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@service/products/products.service';
import { Product } from '@model/products/product.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-bestproduct',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bestproduct.component.html',
  styleUrls: ['./bestproduct.component.css']
})
export class BestproductComponent implements OnInit {
  bestProduct: Product | null = null;
  isLoading = true;
  error: string | null = null;

  constructor(
    private productsService: ProductsService,
  ) {}

  ngOnInit(): void {
    this.loadBestProduct();
  }

  loadBestProduct(): void {
    this.isLoading = true;
    this.error = null;

    this.productsService.getMainProduct().subscribe({
      next: (product) => {
        this.bestProduct = {
          ...product,
          imageUrl: this.productsService.getProductImageUrl(product.imageUrl)
        };
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load featured product. Please try again later.';
        this.isLoading = false;
        console.error('Error loading featured product:', err);
      }
    });
  }
}
