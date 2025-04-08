import { Routes } from '@angular/router';
import {AdminComponent} from './modules/admin/admin.component';
import {PublicComponent} from './modules/public/public.component';
import {StartComponent} from './modules/public/pages/start/start.component';
import {ProductsComponent} from './modules/public/pages/products/products.component';
import {AboutComponent} from './modules/public/pages/about/about.component';
import {BlogComponent} from './modules/public/pages/blog/blog.component';
import {LoginComponent} from './modules/admin/pages/login/login/login.component';
import {ForgotPasswordComponent} from './modules/admin/pages/login/forgot-password/forgot-password.component';
import {CategoriesAdminComponent} from './modules/admin/pages/categoriesAdmin/categories.component';
import {ProductsAdminComponent} from './modules/admin/pages/productsAdmin/products.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },

    ]
  },
  {path: 'admin', component: AdminComponent, children: [
      {path: 'categories', component: CategoriesAdminComponent},
      {path: 'products', component: ProductsAdminComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'page-web', component: PublicComponent, children: [
          {path: 'start', component: StartComponent},
          {path: 'products', component: ProductsComponent},
          {path: 'about', component: AboutComponent},
          {path: 'blog', component: BlogComponent},
        ]},
    ]
  },
  {path: '', component: PublicComponent, children: [
      {path: '', component: StartComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'about', component: AboutComponent},
      {path: 'blog', component: BlogComponent},
    ]}
];
