import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-admin',
  imports: [
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: './admin.component.html'
})
export class AdminComponent {

}
