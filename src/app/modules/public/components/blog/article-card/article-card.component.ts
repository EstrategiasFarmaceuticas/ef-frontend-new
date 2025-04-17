import {Component, input} from '@angular/core';
import {ArticleShortModel} from '@model/article/article.model';
import {DatePipe} from '@angular/common';
import {RouterLink} from '@angular/router';
import {StorageService} from '@service/storageService/storage.service';

@Component({
  selector: 'app-article-card',
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css',
})
export class ArticleCardComponent {
  constructor(protected storageService: StorageService) {
  }

  article = input.required<ArticleShortModel>()
  isExternalImage: boolean = true;

  ngOnInit(){
    if (this.article().headerImage.startsWith('http')) {
      this.isExternalImage = true;
    } else {
      this.isExternalImage = false;
    }
  }
}
