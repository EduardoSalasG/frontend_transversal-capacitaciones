import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { VentasService } from '../../../service/ventas.service';

export interface Compras {
  Producto: Producto;
  VEN_MONTO: number;
  VEN_ID: string;
  VEN_RUT_DT: string;
  TipoDt: TipoDt;
  updatedAt: string;
}

export interface Producto {
  PRO_NOMBRE: string;
  PRO_ID: string;
}

export interface TipoDt {
  TDT_NOMBRE: string;
}

@Component({
  selector: 'app-list-orders',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './list-orders.component.html',
  styleUrl: './list-orders.component.css'
})
export default class ListOrdersComponent implements OnInit {

  constructor(private ventasService: VentasService) { }

  ngOnInit(): void {
    //TODO: Leer id desde navbar
    this.ventasService.getVentasByUserId(1)
      .then((data) => {
        this.compras = data;
        console.log(this.compras)
      })
  }
  public compras: Compras[] = []


}

