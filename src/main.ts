import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Importa provideHttpClient
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Combina la configuración existente con el proveedor de HttpClient
const combinedConfig = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient() // Añade el HttpClient
  ]
};

bootstrapApplication(AppComponent, combinedConfig)
  .catch((err) => console.error(err));
