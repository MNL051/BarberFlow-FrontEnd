import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsService } from '../../../core/services/appointments/appointments.service';

@Component({
  selector: 'app-reservar-cita',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservar-cita.html',
  styleUrl: './reservar-cita.css',
})
export class ReservarCitaComponent implements OnInit {
  private appointmentsService = inject(AppointmentsService);

  //  Variables de pasos/control
  pasoActual: number = 1;
  totalPasos: number = 2;

  //  Arrays que guardaran los datos de la API/servidor
  servicios: any[] = [];
  barberos: any[] = [];

  // Variables para guardar las selecciones elegidas por el usuario
  servicioSeleccionado: any = null;
  barberoSeleccionado: any = null;

  //Disparador
  ngOnInit() {
    // Al cargar el componente, se traen los datos de la base de datos con dos peticiones GET
    this.cargarDatos();
  }

  cargarDatos() {
    // Llamada para obtener los servicios (con su nombre y precio) (Paso1)
    this.appointmentsService.getServicios().subscribe({
      next: (data) => (this.servicios = data), //Esta variable guardara los datos recibidos
      error: (err) => console.error('Error al cargar servicios', err),
    });

    // Llamada para obtener a los trabajadores (Paso 2)
    this.appointmentsService.getBarberos().subscribe({
      next: (data) => (this.barberos = data), //Los datos de los trabajadores se guardaran aquí, para usarse en el paso 2
      error: (err) => console.error('Error al cargar barberos', err),
    });
  }

  // Selecciones disponibles
  seleccionarServicio(servicio: any) {
    this.servicioSeleccionado = servicio;
  }

  seleccionarBarbero(barbero: any) {
    this.barberoSeleccionado = barbero;
  }

  irSiguiente() {
    if (this.pasoActual === 1 && this.servicioSeleccionado) {
      this.pasoActual = 2;
    }
  }

  irAnterior() {
    if (this.pasoActual > 1) this.pasoActual--;
  }
}
