import { Component } from '@angular/core';
import {Product} from '../../../../core/models/product.model';
import {CommonModule, NgForOf} from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [
    NgForOf,
    CommonModule
  ],
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  products: Product[] = [
    new Product(
      'Complett Mom',
      'The Inner Period, for Location of Greece, Wounda',
      'nutrition-facts-argilment.pdf',
      'bestProduct.png',
      true,
      true,
      'A Medical Food with 5.7% fresh milk supply system',
      new Date()
    ),
    new Product(
      'Complett Oncare',
      'Controls diarrhea naturally',
      'nutrition-facts-banatrol.pdf',
      'complettOncare.png',
      true,
      true,
      'A Medical Food with specific food supply system',
      new Date()
    ),
    new Product(
      'Complett Kids',
      'Enhanced formula for diarrhea control',
      'nutrition-facts-banatrol-plus.pdf',
      'complettKids.png',
      true,
      true,
      'Controls the length of time and severity of diarrhea naturally',
      new Date()
    ),

    new Product(
      'Glutapro-Bio',
      'Enhanced formula for diarrhea control',
      'nutrition-facts-banatrol-plus.pdf',
      'glutaproBio.png',
      true,
      true,
      'Controls the length of time and severity of diarrhea naturally',
      new Date()
    ),
    new Product(
      'Complett Recover',
      'Enhanced formula for diarrhea control',
      'nutrition-facts-banatrol-plus.pdf',
      'complettRecover.png',
      true,
      true,
      'Controls the length of time and severity of diarrhea naturally',
      new Date()
    ),
    new Product(
      'Complett Espesannte',
      'Enhanced formula for diarrhea control',
      'nutrition-facts-banatrol-plus.pdf',
      'complettEspesante.png',
      true,
      true,
      'Controls the length of time and severity of diarrhea naturally',
      new Date()
    ),
    new Product(
      'Complett Protein',
      'Enhanced formula for diarrhea control',
      'nutrition-facts-banatrol-plus.pdf',
      'complettProtein.png',
      true,
      true,
      'Controls the length of time and severity of diarrhea naturally',
      new Date()
    ),

  ];

}
