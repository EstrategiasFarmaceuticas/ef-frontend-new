import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductsService } from '@service/products/products.service';
import { Product } from '@model/products/product.model';
import { RouterModule } from '@angular/router';
import {ScrollRevealDirective} from '@core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-bestproduct',
  standalone: true,
  imports: [RouterModule, ScrollRevealDirective],
  templateUrl: './bestproduct.component.html',
})
export class BestproductComponent implements OnInit {
  bestProduct: Product | null = null;
  isLoading = true;
  error: string | null = null;

  constructor(
    private productsService: ProductsService,
    private cdr: ChangeDetectorRef,
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
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = 'Failed to load featured product. Please try again later.';
        this.isLoading = false;
        this.cdr.detectChanges();
        console.error('Error loading featured product:', err);
      }
    });
  }
}
