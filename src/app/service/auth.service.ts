import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { validarToken } from '../graphql-queries';

export interface UserToken {
  tipoUsuario: number[];
  nombre: string;
  id: number;
  email: string;
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoint = 'http://localhost:4000/graphql';

  public user: UserToken = {
    tipoUsuario: [],
    nombre: '',
    id: 0,
    email: ''
  }

  constructor(private http: HttpClient) { }


  async validarToken(token: string): Promise<any> {
    const query = validarToken;
    const variables = {
      authorization: `Bearer ${token}`
    };
    const url = `${this.endpoint}`;
    const body = {
      query: query,
      variables: variables,
    };

    try {
      const response = await this.http
        .post<any>(url, body)
        .toPromise();
      console.log(response.data.validarToken)
      this.user = response.data.validarToken;
      console.log(this.user)
      const obj = {
        tokenValid: true,
        vendor: response.data.validarToken.user.tipoUsuario.includes(2),
        user: this.user
      }
      console.log(obj)
      return obj;
    } catch {
      return false;
    }

  }

  validarVendor() {

    let response

    console.log(this.user.tipoUsuario)
    if (this.user.tipoUsuario) {
      response = this.user.tipoUsuario.includes(2)
      console.log(response)
    }

    return response
  }

}
