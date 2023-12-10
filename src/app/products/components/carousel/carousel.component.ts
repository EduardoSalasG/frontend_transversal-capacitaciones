import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { RouterLink, RouterLinkActive } from '@angular/router';
interface ObjectCarrusel {
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
interface DataCarrusel extends Array<ObjectCarrusel> {
}
@Component({
  selector: 'app-carousel',

  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class CarouselComponent {

  @Input() cursos: DataCarrusel = [
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

  @Input() cantidadItems: any = 0;
  ngOnInit(): void {
  }

}
