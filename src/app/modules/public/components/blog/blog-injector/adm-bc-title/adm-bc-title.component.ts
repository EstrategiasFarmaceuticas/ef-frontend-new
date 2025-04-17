import {Component, input} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-adm-bc-title',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgClass
  ],
  templateUrl: './adm-bc-title.component.html',
  styleUrl: './adm-bc-title.component.css'
})
export class AdmBcTitleComponent {
  data = input.required<string>()
  centerText = input(false)
}
