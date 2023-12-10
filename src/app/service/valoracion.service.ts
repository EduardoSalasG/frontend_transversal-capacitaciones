import { Injectable } from '@angular/core';
import { getValoracionesQuery } from '../graphql-queries';
import { request } from 'graphql-request';

@Injectable({
  providedIn: 'root'
})
export class ValoracionService {
  private endpoint = 'http://localhost:4000/graphql';

  public result = new Promise((resolve) => {
    resolve(request(this.endpoint, getValoracionesQuery))
  })


}
