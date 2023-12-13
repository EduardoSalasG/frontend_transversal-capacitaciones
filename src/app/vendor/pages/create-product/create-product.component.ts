import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterCursosComponent } from '../../../products/components/filter-cursos/filter-cursos.component';
import { ProductoService } from '../../../service/producto.service';
import { CursoService } from '../../../service/curso.service';

export interface Modalidad {
  MOD_ID: string;
  MOD_NOMBRE: string;
}

export interface TipoDeDuracion {
  TDU_ID: string;
  TDU_NOMBRE: string;
  TDU_DESCRIPCION: string;
}

export interface Categorias {
  CCU_ID: string;
  CCU_NOMBRE: string;
  Subcategorias: Subcategoria[];
}

export interface Subcategoria {
  SCU_ID: string;
  SCU_NOMBRE: string;
}


@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule, FilterCursosComponent],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export default class CreateProductComponent implements OnInit {
  cursoInfo: any
  constructor(
    private productosService: ProductoService, cursoService: CursoService,
  ) { }

  ngOnInit(): void {
    this.productosService.getCategoriasCurso().then((data) => {
      this.categoriasArray = data;
      console.log(this.categoriasArray)
    })
  }


  modalidades: Modalidad[] = [{
    "MOD_ID": "1",
    "MOD_NOMBRE": "Online"
  },
  {
    "MOD_ID": "2",
    "MOD_NOMBRE": "Presencial"
  },
  {
    "MOD_ID": "3",
    "MOD_NOMBRE": "Híbrido"
  }]

  tiposDeDuracion: TipoDeDuracion[] = [{
    "TDU_ID": "1",
    "TDU_NOMBRE": "Días",
    "TDU_DESCRIPCION": "Comprende sólo días hábiles"
  },
  {
    "TDU_ID": "2",
    "TDU_NOMBRE": "Semanas",
    "TDU_DESCRIPCION": "Esta duración comprende semanas hábiles"
  },
  {
    "TDU_ID": "3",
    "TDU_NOMBRE": "Meses",
    "TDU_DESCRIPCION": "Semanas hábiles de los meses"
  }]

  //TODO: Arreglar subcategorias con su id {nombre: String, id: number}
  public categoriasArray: Categorias[] = []
  public subcategorias: Subcategoria[] = []
  public defaultSubcategoriaSelected = ''

  crearProductoForm = new FormGroup({
    PRO_NOMBRE: new FormControl(''),
    PRO_DESCRIPCION: new FormControl(''),
    PRO_DESCRIPCION_CORTA: new FormControl(''),
    PRO_PRECIO: new FormControl(''),
    PRO_PRECIO_DESCUENTO: new FormControl(''),
    CUR_DIRIGIDO_A: new FormControl(''),
    CUR_OBJETIVOS: new FormControl(''),
    CUR_ESTRUCTURA: new FormControl(''),
    CUR_IMAGEN_1: new FormControl(''),
    CUR_IMAGEN_2: new FormControl(''),
    CUR_VIDEO_PROMOCIONAL: new FormControl(''),
    CUR_FECHA_INICIO: new FormControl(''),
    CUR_CANTIDAD_MIN_PARTICIPANTES: new FormControl(''),
    CUR_CANTIDAD_MAX_PARTICIPANTES: new FormControl(''),
    CUR_CODIGO_SENCE: new FormControl(''),
    CUR_DURACION: new FormControl(''),
    CUR_INCLUYE_CERTIFICACION: new FormControl(''),
    USU_ID: new FormControl(''),
    TDU_ID: new FormControl(''),
    MOD_ID: new FormControl(''),
    SCU_ID: new FormControl('')
  })

  onSubmit() {
    console.log(this.crearProductoForm.value)

  }

  public myModal: any = document.getElementById('productoCreadoModal')
  public myInput: any = document.getElementById('myInput')

  onSelected(value: any): void {
    (value) ? this.subcategorias = this.categoriasArray[value - 1].Subcategorias : this.subcategorias = []
    console.log(this.categoriasArray)
    console.log(this.subcategorias)
    console.log(value)
    this.setDefaultSubcategoriaAsSelected()
  }

  setDefaultSubcategoriaAsSelected(): void {
    this.defaultSubcategoriaSelected = ''
  }



}
