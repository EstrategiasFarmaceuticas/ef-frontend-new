import {Component, input} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StorageService} from '@service/storageService/storage.service';

@Component({
  selector: 'app-adm-bc-img',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './adm-bc-img.component.html',
  styleUrl: './adm-bc-img.component.css'
})
export class AdmBcImgComponent {
  constructor(
      protected storageService: StorageService
  ) {
  }

  data = input.required<string>()
  isExternalImage: boolean = true;

  ngOnInit(){
    if (this.data().startsWith('http')) {
      this.isExternalImage = true;
    } else {
      this.isExternalImage = false;
    }
  }

  ngOnChanges() {
    if (this.data().startsWith('http')) {
      this.isExternalImage = true;
    } else {
      this.isExternalImage = false;
    }
  }
}
