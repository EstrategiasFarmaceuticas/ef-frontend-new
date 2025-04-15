import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../../core/models/products/product.model';
import {ProductsService} from '../../../../../core/services/products/products.service';

import {Category} from '../../../../../core/models/categories/category.model';
import {Router, RouterLink} from '@angular/router';
import {CategoriesComponent} from '../categories.component';
import {DistributorsComponent} from '../../distributors/distributors.component';

@Component({
  selector: 'app-call-to-categories',
  imports: [
    CategoriesComponent,
    DistributorsComponent,
    RouterLink

  ],
  templateUrl: './call-to-categories.component.html'
})
export class CallToCategoriesComponent implements OnInit {
  products: Product[] = [];
  isLoading = true;
  error: string | null = null;
  selectedCategory: Category | null = null;

  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.selectedCategory = navigation?.extras.state?.['category'] || null;
  }

  ngOnInit(): void {
    if (this.selectedCategory) {
      this.loadProductsByCategory();
    } else {
      // Si no hay categoría seleccionada, cargar todos los productos o manejar el caso
      this.loadProducts();
    }
  }

  loadProductsByCategory(): void {
    this.isLoading = true;
    this.error = null;

    if (!this.selectedCategory) return;

    this.productsService.getProductsByCategory(
      this.selectedCategory.name
    ).subscribe({
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

  loadProducts(): void {
    this.isLoading = true;
    this.error = null;

    this.productsService.getProductsByName().subscribe({
      next: (page) => {
        this.products = page.content.map(product => ({
          ...product,
          imageUrl: this.productsService.getProductImageUrl(product.imageUrl),
          slug: this.createSlug(product.name) // Añadimos esta propiedad
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
