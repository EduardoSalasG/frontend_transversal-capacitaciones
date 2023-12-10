import { Component, Inject, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../components/footer/footer.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FilterCursosComponent } from '../../components/filter-cursos/filter-cursos.component';
import { BannerComponent } from '../../../components/banner/banner.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductoService } from '../../../service/producto.service';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CursoService } from '../../../service/curso.service';
import { CardsCursosComponent } from '../../components/cards-cursos/cards-cursos.component';
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
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule,
    FooterComponent,
    NavbarComponent,
    FilterCursosComponent,
    BannerComponent,
    RouterModule, CarouselComponent, CardsCursosComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
})
export default class CursosComponent implements OnInit {
  cursos: any[] = [];
  cantidadItems: any = 3

  private productosService = Inject(ProductoService)

  public categoriasArray: Categorias[] = [
    {
      "CCU_ID": "1",
      "CCU_NOMBRE": "Administración Pública",
      "Subcategorias": [
        {
          "SCU_ID": "1",
          "SCU_NOMBRE": "Cuerpos de Seguridad"
        },
        {
          "SCU_ID": "2",
          "SCU_NOMBRE": "Fuerzas Armadas de Orden y Seguridad"
        }
      ]
    },
    {
      "CCU_ID": "2",
      "CCU_NOMBRE": "Arquitectura",
      "Subcategorias": [
        {
          "SCU_ID": "3",
          "SCU_NOMBRE": "Arquitectura y Proyección"
        },
        {
          "SCU_ID": "4",
          "SCU_NOMBRE": "Construcción y Obras Públicas"
        }
      ]
    },
    {
      "CCU_ID": "3",
      "CCU_NOMBRE": "Inmobiliaria y Construcción",
      "Subcategorias": [
        {
          "SCU_ID": "5",
          "SCU_NOMBRE": "Diseño de interiores"
        },
        {
          "SCU_ID": "6",
          "SCU_NOMBRE": "Oficios de la Construcción"
        }
      ]
    },
    {
      "CCU_ID": "4",
      "CCU_NOMBRE": "Ciencias",
      "Subcategorias": [
        {
          "SCU_ID": "8",
          "SCU_NOMBRE": "Física"
        },
        {
          "SCU_ID": "9",
          "SCU_NOMBRE": "Biología y Biotecnología"
        }
      ]
    },
    {
      "CCU_ID": "5",
      "CCU_NOMBRE": "Creación y Diseño",
      "Subcategorias": [
        {
          "SCU_ID": "7",
          "SCU_NOMBRE": "Artes Plásticas"
        }
      ]
    }
  ]


  constructor(private router: Router, private cursoService: CursoService) {

  }
  private activatedRoute = inject(ActivatedRoute)
  title = "Todos los cursos";
  producto = false;
  productoId = 0;


  ngOnInit(): void {
    // this.productosService.getCategoriasCurso()
    //   .then((data: any) => {
    //     this.categoriasArray = data.getCategoriasCurso;
    //     console.log(this.categoriasArray)
    //   })
    // this.activatedRoute.params.subscribe(params => {
    //   this.productoId = params["id"]
    // })

    setTimeout(() => {
      this.cursoService.result.then((data: any) => {
        this.cursos = data.getCursosProducto;
      })

    }, 3000)

  }



}
