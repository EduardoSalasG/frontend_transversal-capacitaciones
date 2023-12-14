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
  constructor(private productosService: ProductoService, private cursoService: CursoService) { }
  cursoInfo: any
  proNombre: any
  proDescripcion: any
  proDescripcionCorta: any
  proPrecio: any
  precioDescuento: any
  curDirigidoA: any
  curObjetivos: any
  curEstructura: any
  curImagen1: any
  curImagen2: any
  curVideoPromocional: any
  curFechaInicio: any
  curCantidadMinParticipantes: any
  curCantidadMaxParticipantes: any
  curCodigoSence: any
  curDuracion: any
  curIncluyeCertificacion: any
  usuId: any
  tduId: any
  modId: any
  scuId: any
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

    const parametros = {
      proNombre: this.crearProductoForm.value.PRO_NOMBRE,
      proDescripcion: this.crearProductoForm.value.PRO_DESCRIPCION,
      proDescripcionCorta: this.crearProductoForm.value.PRO_DESCRIPCION_CORTA,
      proPrecio: this.crearProductoForm.value.PRO_PRECIO,
      precioDescuento: this.crearProductoForm.value.PRO_PRECIO_DESCUENTO,
      curDirigidoA: this.crearProductoForm.value.CUR_DIRIGIDO_A,
      curObjetivos: this.crearProductoForm.value.CUR_OBJETIVOS,
      curEstructura: this.crearProductoForm.value.CUR_ESTRUCTURA,
      curImagen1: this.crearProductoForm.value.CUR_IMAGEN_1,
      curImagen2: "Imagen2.png",
      curVideoPromocional: this.crearProductoForm.value.CUR_VIDEO_PROMOCIONAL,
      curFechaInicio: this.crearProductoForm.value.CUR_FECHA_INICIO,
      curCantidadMinParticipantes: this.crearProductoForm.value.CUR_CANTIDAD_MIN_PARTICIPANTES,
      curCantidadMaxParticipantes: this.crearProductoForm.value.CUR_CANTIDAD_MAX_PARTICIPANTES,
      curCodigoSence: this.crearProductoForm.value.CUR_CODIGO_SENCE,
      curDuracion: this.crearProductoForm.value.CUR_DURACION,
      curIncluyeCertificacion: !!this.crearProductoForm.value.CUR_INCLUYE_CERTIFICACION,
      usuId: 2,
      tduId: 1,
      modId: this.crearProductoForm.value.MOD_ID,
      scuId: this.crearProductoForm.value.SCU_ID
    };

    // Imprime el objeto en la consola
    console.log('Parámetros de la función onSubmit:', parametros);

    this.cursoService.newCurso(
      parametros.proNombre,
      parametros.proDescripcion,
      parametros.proDescripcionCorta,
      parametros.proPrecio,
      parametros.precioDescuento,
      parametros.curDirigidoA,
      parametros.curObjetivos,
      parametros.curEstructura,
      parametros.curImagen1,
      parametros.curImagen2,
      parametros.curVideoPromocional,
      parametros.curFechaInicio,
      parametros.curCantidadMinParticipantes,
      parametros.curCantidadMaxParticipantes,
      parametros.curCodigoSence,
      parametros.curDuracion,
      parametros.curIncluyeCertificacion,
      parametros.usuId,
      parametros.tduId,
      parametros.modId,
      parametros.scuId
    ).then((cursoCreado) => {
      console.log(cursoCreado)
      if (cursoCreado) {
        console.log('Curso creado correctamente');
      } else {
        console.log('No se creó el curso');
      }


    })

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

  //TODO: Leer id desde navbar

}
