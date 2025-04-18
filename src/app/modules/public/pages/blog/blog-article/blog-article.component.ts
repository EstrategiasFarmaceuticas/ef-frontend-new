import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '@service/article/article.service';
import {ArticleModel, toArticleModel} from '@model/article/article.model';
import {BlogComponentInjectorType} from '@model/miscellanious/blog/blog-component-injector-type';
import {AdmBcImgComponent} from '@module/public/components/blog/blog-injector/adm-bc-img/adm-bc-img.component';
import {AdmBcTextComponent} from '@module/public/components/blog/blog-injector/adm-bc-text/adm-bc-text.component';
import {AdmBcSubtitleComponent} from '@module/public/components/blog/blog-injector/adm-bc-subtitle/adm-bc-subtitle.component';
import {AdmBcTitleComponent} from '@module/public/components/blog/blog-injector/adm-bc-title/adm-bc-title.component';
import {AdmBcDescriptionComponent} from '@module/public/components/blog/blog-injector/adm-bc-description/adm-bc-description.component';

@Component({
  selector: 'app-blog-article',
  imports: [
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
  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) {
  }

  article : ArticleModel = new ArticleModel();

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const headerUrl = params['url'];
      this.articleService.getArticle(headerUrl).subscribe(article => {
        this.article = toArticleModel(article)
      });
    })
  }

  protected readonly BlogComponentInjectorType = BlogComponentInjectorType;
}
