import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID, ChangeDetectorRef} from '@angular/core';
import {ArticleCardComponent} from '@module/public/components/blog/article-card/article-card.component';
import {ArticleService} from '@service/article/article.service';
import {ArticleShortModel} from '@model/article/article.model';
import {isPlatformBrowser, NgClass} from '@angular/common';

@Component({
  selector: 'app-article-carousel',
  templateUrl: './article-carousel.component.html',
  imports: [
    ArticleCardComponent,
    NgClass
  ],
  styleUrl: './article-carousel.component.css',
  standalone: true
})
export class ArticleCarouselComponent implements OnInit, OnDestroy {
  articles: ArticleShortModel[] = [];
  currentIndex = 0;
  private autoplayInterval: any;
  private isBrowser: boolean;

  constructor(
    private articleService: ArticleService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    this.loadFeaturedArticles();
    if (this.isBrowser) {
      this.startAutoplay();
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      this.stopAutoplay();
    }
  }

  private loadFeaturedArticles() {
    this.articleService.searchArticles('', true, false, 0, 5).subscribe({
      next: (result) => {
        this.articles = result.content;
        this.cdr.detectChanges();
      }
    });
  }

  next() {
    if (!this.articles.length) return;
    this.currentIndex = (this.currentIndex + 1) % this.articles.length;
  }

  prev() {
    if (!this.articles.length) return;
    this.currentIndex = this.currentIndex === 0
      ? this.articles.length - 1
      : this.currentIndex - 1;
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.articles.length) {
      this.currentIndex = index;
    }
  }

  private startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      if (document.hidden) return;
      this.next();
    }, 5000);
  }

  private stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }
}
