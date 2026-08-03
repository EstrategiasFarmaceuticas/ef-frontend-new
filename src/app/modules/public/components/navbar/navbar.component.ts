import { Component, HostListener, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MobileMenuComponent} from './mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MobileMenuComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isMenuOpen = false;
  scrolled = signal(false);

  navLinks = [
    { path: '/', label: 'Inicio', exact: true },
    { path: '/products', label: 'Productos', exact: false },
    { path: '/about', label: 'Nosotros', exact: false },
    { path: '/uses', label: 'Usos', exact: false },
    { path: '/blog', label: 'Blog', exact: false },
    { path: '/actividades', label: 'Actividades', exact: false },
    { path: '/portafolio', label: 'Portafolio', exact: false },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 20);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }
}
