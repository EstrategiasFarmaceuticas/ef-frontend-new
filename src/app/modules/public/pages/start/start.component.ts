import {Component} from '@angular/core';
import {CategoriesComponent} from '../../components/categories/categories.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {BestproductComponent} from '../../components/bestproduct/bestproduct.component';
import {DistributorsComponent} from '../../components/distributors/distributors.component';
@Component({
  selector: 'app-start',
  standalone: true,
  imports: [
    CategoriesComponent,
    BestproductComponent,
    DistributorsComponent
  ],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css',
})
export class StartComponent {

}
