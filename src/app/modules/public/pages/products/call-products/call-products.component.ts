import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Product } from '@model/products/product.model';
import { ProductsService } from '@service/products/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from '@module/public/components/categories/categories.component';
import { StorageService } from '@service/storageService/storage.service';

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
    private storageService: StorageService,
    private router: Router,
    private cdr: ChangeDetectorRef
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
          this.product = {
            ...page.content[0],
            imageUrl: this.getImageUrl(page.content[0].imageUrl),
            nutritionalUrl: this.getImageUrl(page.content[0].nutritionalUrl)
          };
          this.loadRelatedProducts();
        } else {
          this.router.navigate(['/404']);
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = 'Error al cargar el producto';
        this.isLoading = false;
        this.cdr.detectChanges();
        console.error(err);
      }
    });
  }

  private loadRelatedProducts(): void {
    if (!this.product || this.product.categories.length === 0) return;

    const mainCategory = this.product.categories[0].category.name;
    this.productsService.getProductsByCategory(mainCategory, 0, 4)
      .subscribe(page => {
        this.relatedProducts = page.content
          .filter(p => p.name !== this.product?.name)
          .map(p => ({
            ...p,
            imageUrl: this.getImageUrl(p.imageUrl)
          }));
      });
  }

  private getImageUrl(imagePath: string): string {
    if (!imagePath) return 'assets/images/default-product.png';
    if (imagePath.startsWith('http')) return imagePath;
    return this.storageService.getFile(imagePath);
  }

  public handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'assets/images/default-product.png';
    imgElement.classList.add('object-contain', 'p-2');
    imgElement.onerror = null;
  }

  hasContent(items?: any[]): boolean {
    return !!items && items.length > 0;
  }

  getConsumeImageUrl(consume: any): string {
    return consume.url ? this.getImageUrl(consume.url) : 'assets/images/default-consume.png';
  }
}
