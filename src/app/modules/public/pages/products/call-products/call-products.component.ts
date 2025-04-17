import { Component, OnInit } from '@angular/core';
import { Product } from '@model/products/product.model';
import { ProductsService } from '@service/products/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {CategoriesComponent} from '@module/public/components/categories/categories.component';


@Component({
  selector: 'app-call-products',
  standalone: true,
  imports: [CommonModule, RouterModule, CategoriesComponent],
  templateUrl: './call-products.component.html',
})
export class CallProductsComponent implements OnInit {
  product: Product | null = null;
  isLoading = true;
  error: string | null = null;
  relatedProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productName = params['name'];
      this.loadProduct(productName);
    });
  }

  public loadProduct(name: string): void {
    this.isLoading = true;
    this.productsService.getProductsByName(name).subscribe({
      next: (page) => {
        if (page.content.length > 0) {
          this.product = page.content[0];
          this.loadRelatedProducts();
        } else {
          this.router.navigate(['/404']);
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar el producto';
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  private loadRelatedProducts(): void {
    if (!this.product || this.product.categories.length === 0) return;

    const mainCategory = this.product.categories[0].category.name;
    this.productsService.getProductsByCategory(mainCategory, 0, 4)
      .subscribe(page => {
        this.relatedProducts = page.content.filter(p => p.name !== this.product?.name);
      });
  }

  hasContent(items?: any[]): boolean {
    return !!items && items.length > 0;
  }
}
