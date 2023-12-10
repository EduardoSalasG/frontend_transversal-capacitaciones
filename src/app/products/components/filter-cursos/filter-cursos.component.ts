import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  selector: 'app-filter-cursos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-cursos.component.html',
  styleUrl: './filter-cursos.component.css'
})
export class FilterCursosComponent {
  public subcategorias: Subcategoria[] = []
  public defaultSubcategoriaSelected = ''

  @Input() title: String = ''
  @Input() categoriasArray: Categorias[] = []


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
