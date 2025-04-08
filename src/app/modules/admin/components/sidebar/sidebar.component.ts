import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import {NgClass} from '@angular/common';
import { RouterModule } from '@angular/router';
import { faBox, faTags, faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgClass,
    RouterModule,
    FontAwesomeModule,
  ],
  templateUrl: './sidebar.component.html',
})


export class SidebarComponent implements OnInit {

  constructor(private router: Router) {}

  isGestionesOpen: boolean = false; // Estado de la lista Gestiones

  menuItems = [
    { label: 'categorías', icon: faTags, route: '/admin' },
    { label: 'Productos',  icon: faBox, route: '/admin/products' },
    { label: 'Blog',       icon: faBlog, route: '/admin/blog' },
    { label: 'Página Web', icon: faBox, route: '/admin/page-web' },
  ];



  ngOnInit(): void {
    // Escuchar cambios en la ruta
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateSidebarState(event.url);
      });

    // Inicializar el estado del sidebar con la ruta actual
    this.updateSidebarState(this.router.url);
  }

  // Actualizar el estado del sidebar según la ruta
  updateSidebarState(url: string): void {
    // Verificar si la ruta coincide con algún ítem de Gestiones
    const isGestionesActive = this.menuItems.some(item => url === item.route);

    // Abrir solo la sección correspondiente
    this.isGestionesOpen = isGestionesActive;
  }

  // Función para alternar la lista Gestiones
  toggleGestiones(): void {
    this.isGestionesOpen = !this.isGestionesOpen;
    if (this.isGestionesOpen) {
      this.isGestionesOpen = true; // Cierra RGU si Gestiones se abre
    }
  }

  // Navegar a una ruta
  async navigate(route: string): Promise<void> {
    const navigationSuccess = await this.router.navigate([route]);
    if (!navigationSuccess) {
      console.error('La navegación falló');
    }
  }

  // Verificar si la ruta está activa
  isActive(route: string): boolean {
    return this.router.url === route; // Usamos === para coincidencia exacta
  }

  // Función para cerrar sesión
  async logout(): Promise<void> {
    // Aquí puedes agregar lógica adicional, como limpiar el localStorage, etc.
    const navigationSuccess = await this.router.navigate(['/login']); // Redirige al login
    if (!navigationSuccess) {
      console.error('La navegación falló');
    }
  }
}
