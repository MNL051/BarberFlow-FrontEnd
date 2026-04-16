import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  login(credentials: any) {
    return this.http.post<any>(`${this.apiUrl}/api/auth/login`, credentials).pipe(
      tap((res) => {
        // Suponiendo que el backend devuelve { token, rol, barbero_id }
        localStorage.setItem('token', res.token);
        localStorage.setItem('rol', res.rol);
        if (res.barbero_id) {
          localStorage.setItem('barbero_id', res.barbero_id);
        }
      }),
    );
  }

  getRole(): string | null {
    return localStorage.getItem('rol');
  }
}
