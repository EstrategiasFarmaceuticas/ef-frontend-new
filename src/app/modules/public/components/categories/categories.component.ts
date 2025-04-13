
import {NgForOf, NgIf} from '@angular/common';
import { RouterLink } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {Category} from '../../../../core/models/categories/category.model';
import {CategoriesService} from '../../../../core/services/categories/categories.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgForOf, RouterLink, NgIf,HttpClientModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.isLoading = true;
    this.error = null;

    this.categoriesService.getCategories().subscribe({
      next: (page) => {
        this.categories = page.content.map(category => ({
          ...category,
          // Aquí transformamos el path de la imagen en una URL completa
          imageUrl: this.categoriesService.getCategoryImageUrl(category.imageUrl)
        }));
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load categories. Please try again later.';
        this.isLoading = false;
        console.error('Error loading categories:', err);
      }
    });
  }

}
