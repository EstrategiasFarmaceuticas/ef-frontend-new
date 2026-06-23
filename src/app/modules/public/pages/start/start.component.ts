import {Component} from '@angular/core';
import {CategoriesComponent} from '@module/public/components/categories/categories.component';
import {BestproductComponent} from '@module/public/components/bestproduct/bestproduct.component';
import {DistributorsComponent} from '@module/public/components/distributors/distributors.component';
import {ArticleCarouselComponent} from '@module/public/components/blog/article-carousel/article-carousel.component';
import {RouterLink} from '@angular/router';
import {ScrollRevealDirective} from '@core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [
    CategoriesComponent,
    BestproductComponent,
    DistributorsComponent,
    ArticleCarouselComponent,
    RouterLink,
    ScrollRevealDirective,
  ],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css',
})
export class StartComponent {

}
