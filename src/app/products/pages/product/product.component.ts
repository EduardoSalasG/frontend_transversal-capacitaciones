import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
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
  CUR_IMAGEN_1: String
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

interface ObjectLead {
  PRO_ID: Number
  Lead: {
    PRO_NOMBRE: String
    PRO_DESCRIPCION: String
    PRO_DESCRIPCION_CORTA: String
    PRO_PRECIO: any
    PRO_PRECIO_DESCUENTO: any
  }
  LEA_URL_DIR: String
  SubcategoriaLead: {
    SLE_NOMBRE: String
    CategoriaLead: {
      CLE_NOMBRE: String
    }
  }
}


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLinkActive, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export default class ProductComponent implements OnInit {
  public showContent = false;
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
    CUR_IMAGEN_1: "",
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
  @Input() lead: ObjectLead = {
    PRO_ID: 0,
    Lead: {
      PRO_NOMBRE: "",
      PRO_DESCRIPCION: "",
      PRO_DESCRIPCION_CORTA: "",
      PRO_PRECIO: 0,
      PRO_PRECIO_DESCUENTO: 0,
    },
    LEA_URL_DIR: "",
    SubcategoriaLead: {
      SLE_NOMBRE: "",
      CategoriaLead: {
        CLE_NOMBRE: ""
      }
    }
  };

  constructor(private route: ActivatedRoute, private productoService: ProductoService, private router: Router) { }
  comprarProducto() {
    const infoProducto = {
      nombre: this.curso.Curso.PRO_NOMBRE,
      precio: this.curso.Curso.PRO_PRECIO,
      descripcion: this.curso.Curso.PRO_DESCRIPCION,
      id: this.curso.PRO_ID
    }

    this.productoService.setProductoInfo(infoProducto)
    this.router.navigate(['/checkout'])
  }

  comprarLead() {
    const infoProducto = {
      nombre: this.lead.Lead.PRO_NOMBRE,
      precio: this.lead.Lead.PRO_PRECIO,
      descripcion: this.lead.Lead.PRO_DESCRIPCION,

    }

    this.productoService.setProductoInfo(infoProducto)
    this.router.navigate(['/checkout'])
  }

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      this.id = params['id'];

      try {
        this.curso = await this.productoService.getCursoById(this.id);
        console.log(this.curso);

        this.lead = await this.productoService.getLeadById(this.id);

        if (this.curso) {
          this.isCurso = true;
        } else {
          this.isCurso = false;

        }
      } catch (error) {
        console.error('Error al obtener curso o lead:', error);
        this.isCurso = false;
        this.router.navigate(['/']);
      }

      setTimeout(() => {
        this.showContent = true
      }, 3500);

    });
  }

}
