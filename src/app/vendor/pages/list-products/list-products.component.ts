import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CursoService } from '../../../service/curso.service';

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
  public showContent = false;
  placeholders: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  constructor(private cursoService: CursoService) { }
  ngOnInit(): void {

    this.cursoService.getCursosByUserId(1)
      .then((data) => {
        this.cursos = data;
        console.log(this.cursos)
      })

    setTimeout(() => {
      this.showContent = true
    }, 4500);
  }

  public cursos: Curso[] = []


  public myModal: any = document.getElementById('eliminarModal')
  public myInput: any = document.getElementById('myInput')

}
