import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface ObjectCard {
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
interface DataCard extends Array<ObjectCard> {
}
@Component({
  selector: 'app-cards-leads',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './cards-leads.component.html',
  styleUrl: './cards-leads.component.css'
})
export class CardsLeadsComponent {

  @Input() leads: DataCard = [
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
}
