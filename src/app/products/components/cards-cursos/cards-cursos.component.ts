import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
interface ObjectCard {
  Curso: {
    PRO_NOMBRE: String,
    PRO_DESCRIPCION_CORTA: String,
    PRO_DESTACADO: Boolean,
    PRO_PRECIO: any
  },
  SubcategoriaCurso:
  { SCU_NOMBRE: String },
  CUR_IMAGEN_1: String,
  PRO_ID: Number
}
interface DataCard extends Array<ObjectCard> {
}
@Component({
  selector: 'app-cards-cursos',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './cards-cursos.component.html',
  styleUrl: './cards-cursos.component.css'
})
export class CardsCursosComponent {
  @Input() cursos: DataCard = [
    {
      Curso: {
        PRO_NOMBRE: "",
        PRO_DESCRIPCION_CORTA: "",
        PRO_DESTACADO: false,
        PRO_PRECIO: ""
      },
      SubcategoriaCurso: {
        SCU_NOMBRE: ""
      },
      CUR_IMAGEN_1: "",
      PRO_ID: 0
    }
  ]
  ngOnInit(): void {
  }
}
