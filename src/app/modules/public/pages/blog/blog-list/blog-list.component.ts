import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {ArticleShortModel} from '@model/article/article.model';
import {Page} from '@model/page';
import {ArticleService} from '@service/article/article.service';
import {StorageService} from '@service/storageService/storage.service';
import {ArticleCardComponent} from '@module/public/components/blog/article-card/article-card.component';
import {InfiniteScrollDirective} from 'ngx-infinite-scroll';

@Component({
  selector: 'app-blog-list',
  imports: [
    FormsModule,
    DatePipe,
    RouterLink,
    ArticleCardComponent,
    InfiniteScrollDirective,
  ],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements OnInit {
  searchQuery: string = "";
  articles: Page<ArticleShortModel> | null = null;
  currentPage: number = 0;
  size: number = 8;

  constructor(
    private articleService: ArticleService,
    private storageService: StorageService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.loadArticles();
  }

  onSearch($event: any) {
    this.searchQuery = $event;
    this.currentPage = 0;
    this.articles = null;
    this.loadArticles();
  }

  loadArticles() {
    this.articleService.searchArticles(this.searchQuery, true, false, this.currentPage, this.size).subscribe({
      next: result => {
        if (this.articles) {
          this.articles.content = [...this.articles.content, ...result.content];
        } else {
          this.articles = result;
        }
        this.cdr.detectChanges();
      }
    });
  }

  loadMore() {
    this.currentPage++;
    this.loadArticles();
  }



  getArticleImage(article: ArticleShortModel): string {
    return article.headerImage.startsWith('http')
      ? article.headerImage
      : this.storageService.getFile(article.headerImage);
  }
}
