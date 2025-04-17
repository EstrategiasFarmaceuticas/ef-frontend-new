import {Component} from '@angular/core';
import {CategoriesComponent} from '@module/public/components/categories/categories.component';
import {BestproductComponent} from '@module/public/components/bestproduct/bestproduct.component';
import {DistributorsComponent} from '@module/public/components/distributors/distributors.component';
import {SliderblogComponent} from '@module/public/components/sliderblog/sliderblog.component';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [
    CategoriesComponent,
    BestproductComponent,
    DistributorsComponent,
    SliderblogComponent,
  ],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css',
})
export class StartComponent {

}
