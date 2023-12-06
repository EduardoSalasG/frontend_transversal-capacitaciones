// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../environments/environments';
import { newUser } from '../interface/auth.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl: string = environments.baseURL;

  // constructor(private http: HttpClient) { }

  // createUser(newUser: newUser): Observable<newUser> {
  //   return this.http.post<newUser>(`${this.baseUrl}/usuarios`, newUser);
  // }

}
