import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Categorias {
  CLE_ID: string;
  CLE_NOMBRE: string;
  Subcategorias: Subcategoria[];
}

export interface Subcategoria {
  SLE_ID: string;
  SLE_NOMBRE: string;
}


@Component({
  selector: 'app-filter-leads',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-leads.component.html',
  styleUrl: './filter-leads.component.css'
})
export class FilterLeadsComponent {
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
