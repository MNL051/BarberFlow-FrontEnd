import { Routes } from '@angular/router';

import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/auth/register/register';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

//v2.0
// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   {
//     path: 'mis-citas',
//     component: MyAppointmentsComponent,
//     canActivate: [authGuard],
//   },
//   {
//     path: 'admin-panel',
//     component: AdminComponent,
//     canActivate: [authGuard, roleGuard],
//     data: { expectedRole: 'admin' },
//   },
//   {
//     path: 'barber-panel',
//     component: BarberComponent,
//     canActivate: [authGuard, roleGuard],
//     data: { expectedRole: 'barbero' },
//   },
// ];

//v3.0
// import { Routes } from '@angular/router';
// import { authGuard } from './core/guards/auth.guard';
// import { roleGuard } from './core/guards/role.guard';
// import { LoginComponent } from './pages/login/login.component';

// export const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   {
//     path: 'mis-citas',
//     loadComponent: () =>
//       import('./pages/appointments/my-appointments/my-appointments.component').then(
//         (m) => m.MyAppointmentsComponent,
//       ),
//     canActivate: [authGuard],
//   },
//   {
//     path: 'admin-panel',
//     loadComponent: () =>
//       import('./pages/admin/admin-panel/admin-panel.component').then((m) => m.AdminPanelComponent),
//     canActivate: [authGuard, roleGuard],
//     data: { expectedRole: 'admin' },
//   },
// ];
