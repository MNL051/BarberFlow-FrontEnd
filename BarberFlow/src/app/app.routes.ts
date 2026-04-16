import { Routes } from '@angular/router';

import { authGuard } from './core/guards//auth-guard';
import { roleGuard } from './core/guards/role.guard';
import { LoginComponent } from './pages/auth/login/login';
import { RegisterComponent } from './pages/auth/register/register';
import { MisCitasComponent } from './pages/appointments/mis-citas/mis-citas';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'mis-citas',
    component: MisCitasComponent,
    //canActivate: [authGuard], // Si se comenta es para hacer pruebas sin login
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
