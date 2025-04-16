import {Component, ElementRef, input, output, ViewChild} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-adm-bc-description',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgClass
  ],
  templateUrl: './adm-bc-description.component.html',
  styleUrl: './adm-bc-description.component.css'
})
export class AdmBcDescriptionComponent {
  data = input.required<string>()
  centerText = input(false)
}
