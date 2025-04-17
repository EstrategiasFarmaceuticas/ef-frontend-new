import {Routes} from '@angular/router';
import {PublicComponent} from './modules/public/public.component';
import {StartComponent} from './modules/public/pages/start/start.component';
import {ProductsComponent} from './modules/public/pages/products/products.component';
import {AboutComponent} from './modules/public/pages/about/about.component';
import {BlogComponent} from './modules/public/pages/blog/blog.component';
import {
  CallToCategoriesComponent
} from './modules/public/components/categories/call-to-categories/call-to-categories.component';
import {BlogListComponent} from './modules/public/pages/blog/blog-list/blog-list.component';
import {BlogArticleComponent} from './modules/public/pages/blog/blog-article/blog-article.component';

export const routes: Routes = [
  {
    path: '', component: PublicComponent, children: [
      {path: '', component: StartComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'about', component: AboutComponent},
      {path: 'products-by-categories', component: CallToCategoriesComponent }
      {path: 'blog', component: BlogComponent, children: [
          {path: '', component: BlogListComponent},
          {path:':url', component: BlogArticleComponent}
      ]},
    ]
  }
];
