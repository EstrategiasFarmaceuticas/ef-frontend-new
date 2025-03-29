import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  isMenuOpen = false; // Estado del menú

  // Función para alternar el menú
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
