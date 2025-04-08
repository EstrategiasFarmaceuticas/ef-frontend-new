import { Component } from '@angular/core';
import {Category} from '../../../../core/models/categories/category.model';
import {Product} from '../../../../core/models/products/product.model';

@Component({
  selector: 'app-bestproduct',
  imports: [],
  templateUrl: './bestproduct.component.html',
  styleUrl: './bestproduct.component.css'
})
export class BestproductComponent {
  bestProduct = new Product(
    'COMPLETT ONCARE',
    'Descripción del producto ejemplo',
    'https://example.com/nutricional',
    'complettOncare.png',
    true,
    true,
    'Descripción corta del producto ejemplo',
    new Date()
  );
}

