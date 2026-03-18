import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-usesproduct',
  imports: [
    NgForOf
  ],
  templateUrl: './usesproduct.component.html',
  styleUrl: './usesproduct.component.css'
})
export class UsesProductComponent {
  constructor(private router: Router) {}
  products = [
    {
      id: 'glutaprot',  // Este ID debe coincidir con la ruta
      name: 'Glutaprot-Bio',
      description: 'Cellular support, inflammatory modulation and tissue regeneration.',
      image: 'glutaprot.webp',
      route: '/uses/glutaprot'
    },
    {
      id: 'kid',
      name: 'Qomplett Kidz',
      description: 'Specialized nutritional support for renal health and metabolic balance.',
      image: 'kidz.webp',
      route: '/uses/kidz'
    },
    {
      id: 'oncare',
      name: 'Qomplett Oncare',
      description: 'Nutritional support for oncology patients during treatment and recovery.',
      image: 'oncare.webp',
      route: '/uses/oncare'
    },
    {
      id: 'recover',
      name: 'Qomplett Recover',
      description: 'Accelerates tissue recovery and wound healing process.',
      image: 'recover.webp',
      route: '/uses/recover'
    },
    {
      id: 'protein',
      name: 'Qomplett Protein',
      description: 'High-quality protein supplement for muscle maintenance and recovery.',
      image: 'protein.webp',
      route: '/uses/protein'
    }
  ];


  viewProductDetails(route: string): void {
    this.router.navigate([route]);
  }
}
