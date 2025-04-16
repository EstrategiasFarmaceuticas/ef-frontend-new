import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ArticleShortModel} from '../../../../../core/models/article/article.model';
import {Page} from '../../../../../core/models/page';
import {ArticleService} from '../../../../../core/services/article/article.service';
import {ArticleCardComponent} from '../../../components/blog/article-card/article-card.component';

@Component({
  selector: 'app-blog-list',
  imports: [
    FormsModule,
    ArticleCardComponent
  ],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  searchQuery: string = "";
  articles: Page<ArticleShortModel> | null = null;

  constructor(private articleService: ArticleService) {
  }

  ngOnInit(){
    this.articleService.searchArticles().subscribe({
      next: result => {
        this.articles = result;
      }
    })
  }

  onSearch($event: any) {
    this.articleService.searchArticles($event).subscribe({
      next: result => {
        this.articles = result;
      }
    })
  }
}
