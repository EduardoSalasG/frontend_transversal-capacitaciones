import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
interface ObjectCarrusel {
  PRO_ID: Number
  Lead: {
    PRO_NOMBRE: String,
    PRO_DESCRIPCION_CORTA: String,
    PRO_DESTACADO: Boolean,
    PRO_PRECIO: any
  },
  SubcategoriaLead:
  { SLE_NOMBRE: String },

}
interface DataCarrusel extends Array<ObjectCarrusel> {
}
@Component({
  selector: 'app-carousel-leads',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './carousel-leads.component.html',
  styleUrl: './carousel-leads.component.css'
})
export class CarouselLeadsComponent {
  @Input() leads: DataCarrusel = [
    {
      PRO_ID: 0,
      Lead: {
        PRO_NOMBRE: "",
        PRO_DESCRIPCION_CORTA: "",
        PRO_DESTACADO: false,
        PRO_PRECIO: ""
      },
      SubcategoriaLead: {
        SLE_NOMBRE: ""
      }
    }
  ]

  @Input() cantidadItems: any = 0;

}
