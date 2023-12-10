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
  public categoriasArray: Categorias[] = []
  public subcategorias: Subcategoria[] = []
  public defaultSubcategoriaSelected = ''


  constructor(
    private router: Router,
    private cursoService: CursoService,
    private productosService: ProductoService,
  ) {

  }
  private activatedRoute = inject(ActivatedRoute)
  title = "Todos los cursos";
  producto = false;
  productoId = 0;


  ngOnInit() {

    this.productosService.getCategoriasCurso().then((data) => {
      this.categoriasArray = data;
      console.log(this.categoriasArray)
    })

    this.activatedRoute.params.subscribe(params => {
      this.productoId = params["id"]
    })

    setTimeout(() => {
      this.cursoService.result.then((data: any) => {
        this.cursos = data.getCursosProducto;
      })

    }, 3000)

  }

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
