import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface Curso {
  PRO_ID: string;
  SubcategoriaCurso: SubcategoriaCurso;
  Curso: CursoClass;
}

export interface CursoClass {
  PRO_NOMBRE: string;
  PRO_PRECIO: number;
}

export interface SubcategoriaCurso {
  SCU_NOMBRE: string;
  CategoriaCurso: CategoriaCurso;
}

export interface CategoriaCurso {
  CCU_NOMBRE: string;
}



@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export default class ListProductsComponent implements OnInit {

  ngOnInit(): void {
    this.cursos = [{
      "PRO_ID": "6",
      "SubcategoriaCurso": {
        "SCU_NOMBRE": "Cuerpos de Seguridad",
        "CategoriaCurso": {
          "CCU_NOMBRE": "Administración Pública"
        }
      },
      "Curso": {
        "PRO_NOMBRE": "Capacitación para inspectores municipales de seguridad",
        "PRO_PRECIO": 180000
      }
    },
    {
      "PRO_ID": "11",
      "SubcategoriaCurso": {
        "SCU_NOMBRE": "Cuerpos de Seguridad",
        "CategoriaCurso": {
          "CCU_NOMBRE": "Administración Pública"
        }
      },
      "Curso": {
        "PRO_NOMBRE": "Curso de Supervisor de Seguridad Privada",
        "PRO_PRECIO": 200000
      }
    }]
  }

  public cursos: Curso[] = []


  public myModal: any = document.getElementById('eliminarModal')
  public myInput: any = document.getElementById('myInput')

}
