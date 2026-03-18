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
import {CallProductsComponent} from '@module/public/pages/products/call-products/call-products.component';
import {UsesproductComponent} from '@module/public/components/usesproduct/usesproduct.component';
import {
  DetailGlutaprotUsesComponent
} from '@module/public/components/usesproduct/detail-glutaprot-uses/detail-glutaprot-uses.component';
import {
  DetailRecoverUsesComponent
} from '@module/public/components/usesproduct/detail-recover-uses/detail-recover-uses.component';
import {
  DetailKidzUsesComponent
} from '@module/public/components/usesproduct/detail-kidz-uses/detail-kidz-uses.component';
import {
  DetailOncareUsesComponent
} from '@module/public/components/usesproduct/detail-oncare-uses/detail-oncare-uses.component';
import {
  DetailProteinUsesComponent
} from '@module/public/components/usesproduct/detail-protein-uses/detail-protein-uses.component';

export const routes: Routes = [
  {
    path: '', component: PublicComponent, children: [
      {path: '', component: StartComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'product/:name', component: CallProductsComponent},
      {path: 'about', component: AboutComponent},
      {path: 'uses', component: UsesproductComponent},
      {path: 'uses/glutaprot', component: DetailGlutaprotUsesComponent},
      {path: 'uses/recover', component: DetailRecoverUsesComponent},
      {path: 'uses/kidz', component: DetailKidzUsesComponent},
      {path: 'uses/oncare', component: DetailOncareUsesComponent},
      {path: 'uses/protein', component: DetailProteinUsesComponent},
      {path: 'category/:name', component: CallToCategoriesComponent },
      {path: 'blog', component: BlogComponent, children: [
          {path: '', component: BlogListComponent},
          {path:':url', component: BlogArticleComponent}
      ]},
    ]
  }
];
