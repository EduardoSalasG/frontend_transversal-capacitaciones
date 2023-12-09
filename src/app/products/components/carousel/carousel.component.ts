import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
interface ObjectCarrusel {
  Curso: {
    PRO_NOMBRE: String,
    PRO_DESCRIPCION_CORTA: String,
    PRO_DESTACADO: Boolean,
    PRO_PRECIO: any
  },
  SubcategoriaCurso:
  { SCU_NOMBRE: String },
  CUR_IMAGEN_1: String
}
interface DataCarrusel extends Array<ObjectCarrusel> {
}
@Component({
  selector: 'app-carousel',

  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CarouselComponent implements OnInit {
  // public cursoService = Inject(CursoService);

  // getCursoInformation$!: Observable<any>;

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
      CUR_IMAGEN_1: ""

    }
  ]


  ngOnInit(): void {
    // this.getCursoInformation$ =
    //   this.cursoService.getCursoInformation()
  }

}
