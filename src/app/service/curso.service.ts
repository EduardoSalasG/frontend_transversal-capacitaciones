import { Injectable } from '@angular/core';
import { getCursosQuery, queryNewCurso } from '../graphql-queries';
import { request } from 'graphql-request';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private endpoint = 'http://localhost:4000/graphql';
  constructor(private http: HttpClient) { }

  public result = new Promise((resolve) => {
    resolve(request(this.endpoint, getCursosQuery))
  })

  newCurso(nombre: any, descripcion: any, descripcion_c: any,
    precio: any, precio_descuento: any, dirigido_a: any, objetivos: any,
    estructura: any, imagen1: any, imagen2: any, video: any,
    fecha_inicio: any, cant_min: any, cant_max: any,
    codigo_sence: any, duracion: any, certificacion: any,
    usuario: any, tipo_duracion: any, modalidad: any
    , subcategoria: any): Promise<any> {
    const query = queryNewCurso
    const variables = {
      proNombre: nombre,
      proDescripcion: descripcion,
      proDescripcionCorta: descripcion_c,
      proPrecio: precio,
      proPrecioDescuento: precio_descuento,
      curDirigidoA: dirigido_a,
      curObjetivos: objetivos,
      curEstructura: estructura,
      curImagen1: imagen1,
      curImagen2: imagen2,
      curVideoPromocional: video,
      curFechaInicio: fecha_inicio,
      curCantidadMinParticipantes: cant_min,
      curCantidadMaxParticipantes: cant_max,
      curCodigoSence: codigo_sence,
      curDuracion: duracion,
      curIncluyeCertificacion: certificacion,
      usuId: usuario,
      tduId: tipo_duracion,
      modId: modalidad,
      scuId: subcategoria
    }
    const url = `${this.endpoint}`;
    const body = {
      query: query,
      variables: variables,
    }

    return this.http
      .post<any>(url, body)
      .toPromise()
      .then((response) => response.data.newCurso);
  }


}
