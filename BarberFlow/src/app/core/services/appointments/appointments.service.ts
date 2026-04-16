import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AppointmentsService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  // GET /api/citas/:usuario_id
  getUserAppointments(usuarioId: string) {
    return this.http.get<any[]>(`${this.apiUrl}/api/citas/${usuarioId}`);
  }

  // PATCH /api/citas/:id/estado
  cancelAppointment(appointmentId: string) {
    return this.http.patch(`${this.apiUrl}/api/citas/${appointmentId}/estado`, {
      estado: 'cancelada',
    });
  }
}
