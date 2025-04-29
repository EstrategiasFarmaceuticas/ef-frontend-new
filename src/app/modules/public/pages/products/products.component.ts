import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from '@module/public/components/categories/categories.component';
import { DistributorsComponent } from '@module/public/components/distributors/distributors.component';
import { ProductsService } from '@service/products/products.service';
import { Product } from '@model/products/product.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DistributorsComponent,
    CategoriesComponent
  ],
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.error = null;

    this.productsService.getProductsByName().subscribe({
      next: (page) => {
        this.products = page.content.map(product => ({
          ...product,
          imageUrl: this.productsService.getProductImageUrl(product.imageUrl),
          slug: this.createSlug(product.name)
        }));
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load products. Please try again later.';
        this.isLoading = false;
        console.error('Error loading products:', err);
      }
    });
  }

  // Método para crear el slug del producto
  createSlug(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }
}
