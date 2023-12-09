import { Injectable } from '@angular/core';
import { getCursosQuery } from '../graphql-queries';
import { request } from 'graphql-request';  // Importa solo 'request' de 'graphql-request'

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private endpoint = 'http://localhost:4000/graphql';

  getCursos(): Promise<any> {
    return request(this.endpoint, getCursosQuery);
  }
}
