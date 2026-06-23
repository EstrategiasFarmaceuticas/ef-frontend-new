import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {Product} from '@model/products/product.model';
import {ProductsService} from '@service/products/products.service';

import {Category} from '@model/categories/category.model';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {CategoriesComponent} from '../categories.component';
import {DistributorsComponent} from '../../distributors/distributors.component';
import {CategoriesService} from '@service/categories/categories.service';
import {StorageService} from '@service/storageService/storage.service';


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
  isExternalImage: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private categoryService: CategoriesService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    protected storageService: StorageService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.selectedCategory = navigation?.extras.state?.['category'] || null;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const headerUrl = params['name'];
      this.categoryService.searchCategories(headerUrl).subscribe(category => {
        this.selectedCategory = category.content.pop() || null;
        if (this.selectedCategory) {
          if (this.selectedCategory.imageUrl.startsWith('http')) {
            this.isExternalImage = true;
          } else {
            this.isExternalImage = false;
          }
          this.loadProductsByCategory();
        } else {
          this.loadProducts();
        }
      });
    })
  }

  ngOnChanges(): void {
    this.activatedRoute.params.subscribe(params => {
      const headerUrl = params['name'];
      this.categoryService.searchCategories(headerUrl).subscribe(category => {
        this.selectedCategory = category.content.pop() || null;
        if (this.selectedCategory) {
          if (this.selectedCategory.imageUrl.startsWith('http')) {
            this.isExternalImage = true;
          } else {
            this.isExternalImage = false;
          }
          this.loadProductsByCategory();
        } else {
          this.loadProducts();
        }
      });
    })
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

  // Método para crear el slug del producto
  createSlug(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }
}
