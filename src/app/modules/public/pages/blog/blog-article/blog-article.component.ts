import {Component} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {CommonModule, registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';
import {ArticleService} from '@service/article/article.service';
import {StorageService} from '@service/storageService/storage.service';
import {ArticleModel, toArticleModel} from '@model/article/article.model';
import {BlogComponentInjectorType} from '@model/miscellanious/blog/blog-component-injector-type';
import {AdmBcImgComponent} from '@module/public/components/blog/blog-injector/adm-bc-img/adm-bc-img.component';
import {AdmBcTextComponent} from '@module/public/components/blog/blog-injector/adm-bc-text/adm-bc-text.component';
import {AdmBcSubtitleComponent} from '@module/public/components/blog/blog-injector/adm-bc-subtitle/adm-bc-subtitle.component';
import {AdmBcTitleComponent} from '@module/public/components/blog/blog-injector/adm-bc-title/adm-bc-title.component';
import {AdmBcDescriptionComponent} from '@module/public/components/blog/blog-injector/adm-bc-description/adm-bc-description.component';

registerLocaleData(localeEs);

@Component({
  selector: 'app-blog-article',
  imports: [
    CommonModule,
    RouterLink,
    AdmBcImgComponent,
    AdmBcTextComponent,
    AdmBcSubtitleComponent,
    AdmBcTitleComponent,
    AdmBcDescriptionComponent
  ],
  templateUrl: './blog-article.component.html',
  styleUrl: './blog-article.component.css'
})
export class BlogArticleComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private storageService: StorageService,
  ) {}

  article: ArticleModel = new ArticleModel();

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const headerUrl = params['url'];
      this.articleService.getArticle(headerUrl).subscribe(article => {
        this.article = toArticleModel(article);
      });
    });
  }


  getHeaderImage(): string {
    if (!this.article.headerImage) return '';
    return this.article.headerImage.startsWith('http')
      ? this.article.headerImage
      : this.storageService.getFile(this.article.headerImage);
  }


  getReadingTime(): number {
    const wordsPerMinute = 200;
    let totalWords = (this.article.shortDesc || '').split(/\s+/).length;
    (this.article.content || []).forEach(section => {
      if (typeof section.data === 'string') {
        totalWords += section.data.split(/\s+/).length;
      }
    });
    return Math.max(1, Math.ceil(totalWords / wordsPerMinute));
  }

  protected readonly BlogComponentInjectorType = BlogComponentInjectorType;
}
