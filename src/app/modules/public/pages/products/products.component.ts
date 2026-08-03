import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from '@module/public/components/categories/categories.component';
import { DistributorsComponent } from '@module/public/components/distributors/distributors.component';
import { ProductsService } from '@service/products/products.service';
import { Product } from '@model/products/product.model';
import { RouterModule } from '@angular/router';
import {BestproductComponent} from '@module/public/components/bestproduct/bestproduct.component';
import {ScrollRevealDirective} from '@core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DistributorsComponent,
    CategoriesComponent,
    BestproductComponent,
    ScrollRevealDirective,
  ],
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory: string | null = null;
  searchQuery: string = '';
  isLoading = true;
  error: string | null = null;

  private searchTimeout: any;

  constructor(
    private productsService: ProductsService,
    private cdr: ChangeDetectorRef
  ) {}

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

        this.categories = this.extractUniqueCategories(this.products);

        this.applyFilters();

        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = 'Failed to load products. Please try again later.';
        this.isLoading = false;
        this.cdr.detectChanges();
        console.error('Error loading products:', err);
      }
    });
  }


  private extractUniqueCategories(products: Product[]): string[] {
    const set = new Set<string>();
    products.forEach(p => {
      if (p.categories && p.categories.length > 0) {
        p.categories.forEach(pc => {
          if (pc.category?.name) {
            set.add(pc.category.name);
          }
        });
      }
    });
    return Array.from(set).sort();
  }


  applyFilters(): void {
    const q = this.searchQuery.trim().toLowerCase();

    this.filteredProducts = this.products.filter(p => {
      // Filtro por nombre / descripción corta
      const matchesQuery = !q ||
        p.name.toLowerCase().includes(q) ||
        (p.shortDesc && p.shortDesc.toLowerCase().includes(q));

      // Filtro por categoría
      const matchesCategory = !this.selectedCategory ||
        (p.categories && p.categories.some(pc => pc.category?.name === this.selectedCategory));

      return matchesQuery && matchesCategory;
    });
  }

  selectCategory(category: string | null): void {
    this.selectedCategory = category;
    this.applyFilters();
  }


  onSearchChange(): void {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.applyFilters();
    }, 200);
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.applyFilters();
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.selectedCategory = null;
    this.applyFilters();
  }

  createSlug(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }
}
