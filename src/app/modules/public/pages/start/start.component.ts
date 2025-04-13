import {Component} from '@angular/core';
import {CategoriesComponent} from '../../components/categories/categories.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {BestproductComponent} from '../../components/bestproduct/bestproduct.component';
import {DistributorsComponent} from '../../components/distributors/distributors.component';
import {SliderblogComponent} from '../../components/sliderblog/sliderblog.component';
import {MobileMenuComponent} from '../../components/navbar/mobile-menu/mobile-menu.component';
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
