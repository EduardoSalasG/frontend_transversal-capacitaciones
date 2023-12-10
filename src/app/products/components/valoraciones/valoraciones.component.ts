import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
interface ObjectCarruselValoraciones {
  VAL_FECHA: any,
  VAL_PUNTAJE: Number,
  VAL_COMENTARIO: String,
  PRO_ID: Number,
  Producto: {
    PRO_NOMBRE: String
  }
}

interface DataCarruselValoraciones extends Array<ObjectCarruselValoraciones> {
}
@Component({
  selector: 'app-valoraciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './valoraciones.component.html',
  styleUrl: './valoraciones.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ValoracionesComponent {
  @Input() valoraciones: DataCarruselValoraciones = [
    {
      VAL_FECHA: "",
      VAL_PUNTAJE: 0,
      VAL_COMENTARIO: "",
      PRO_ID: 0,
      Producto: {
        PRO_NOMBRE: ""
      }
    }
  ]
}
