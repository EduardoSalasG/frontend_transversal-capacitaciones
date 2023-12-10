import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../../service/producto.service';


interface ObjectCurso {
  PRO_ID: Number
  Curso: {
    PRO_NOMBRE: String
    PRO_DESCRIPCION: String
    PRO_PRECIO: any
    PRO_PRECIO_DESCUENTO: any
  }
  CUR_DIRIGIDO_A: String
  CUR_OBJETIVOS: String
  CUR_ESTRUCTURA: String
  CUR_FECHA_INICIO: any
  CUR_CANTIDAD_MIN_PARTICIPANTES: Number
  CUR_CANTIDAD_MAX_PARTICIPANTES: Number
  CUR_CODIGO_SENCE: String
  CUR_DURACION: Number
  CUR_INCLUYE_CERTIFICACION: Boolean
  Modalidad: {
    MOD_NOMBRE: String
  }
  SubcategoriaCurso: {
    SCU_NOMBRE: String
    CategoriaCurso: {
      CCU_NOMBRE: String
    }
  }
  TipoDeDuracion: {
    TDU_NOMBRE: String
  }
}


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export default class ProductComponent implements OnInit {

  id: any = 0;
  isCurso: Boolean = true;

  @Input() curso: ObjectCurso = {
    PRO_ID: 0,
    Curso: {
      PRO_NOMBRE: "",
      PRO_DESCRIPCION: "",
      PRO_PRECIO: 0,
      PRO_PRECIO_DESCUENTO: 0,
    },
    CUR_DIRIGIDO_A: "",
    CUR_OBJETIVOS: "",
    CUR_ESTRUCTURA: "",
    CUR_FECHA_INICIO: new Date(),
    CUR_CANTIDAD_MIN_PARTICIPANTES: 0,
    CUR_CANTIDAD_MAX_PARTICIPANTES: 0,
    CUR_CODIGO_SENCE: "",
    CUR_DURACION: 0,
    CUR_INCLUYE_CERTIFICACION: false,
    Modalidad: {
      MOD_NOMBRE: "",
    },
    SubcategoriaCurso: {
      SCU_NOMBRE: "",
      CategoriaCurso: {
        CCU_NOMBRE: "",
      }
    },
    TipoDeDuracion: {
      TDU_NOMBRE: "",
    }
  };
  lead: any = {};

  // @Input() lead: ObjectCurso = {

  // }

  constructor(private route: ActivatedRoute, private productoService: ProductoService) { }

  // @Input() productoId = 0
  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })

    await this.productoService.getCursoById(this.id).then((curso) => {
      console.log(curso)
      this.curso = curso;
    })

    await this.productoService.getLeadById(this.id).then((lead) => {
      this.lead = lead;
    })

    if (this.curso === null) {
      this.isCurso = false

      return this.isCurso
    } else {
      this.isCurso = true

      return this.isCurso
    }

  }

}
