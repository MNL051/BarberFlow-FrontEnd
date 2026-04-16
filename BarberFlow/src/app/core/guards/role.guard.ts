import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  //const tokenData = authService.getDecodedToken(); // Método que usa jwt-decode

  const expectedRole = route.data['expectedRole']; // Definido en el routing
  const { rol, barbero_id } = tokenData;

  // Lógica especial: Si es admin con ID de barbero, tiene "superpoderes"
  if (rol === 'admin' && barbero_id != null) {
    return true; // Acceso total
  }

  if (rol === expectedRole) {
    return true;
  }

  router.navigate(['/unauthorized']);
  return false;
};
