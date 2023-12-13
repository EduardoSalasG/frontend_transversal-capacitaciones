import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

interface UserToken {
  id: number
  nombre: string
  email: string
  tipoUsuario: number[]
}


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(private cookieService: CookieService,
    // private authService: AuthService,
  ) { }

  private token: string = ''

  public user: UserToken = {
    id: 1,
    nombre: "Juan",
    email: "prueba@prueba.com",
    tipoUsuario: [
      1,
      2
    ]
  }

  public misCompras: boolean = false
  public misProductos: boolean = false


  ngOnInit(): void {
    this.token = this.cookieService.get('token')
    this.validarToken()
    //this.authService.validarToken()
  }

  //TODO: Pasar a authService
  validarToken() {
    if (this.token !== '') {
      this.misCompras = true
      this.validarVendor()
    }
    console.log(this.token)

  }
  //TODO: Pasar a authService
  validarVendor() {
    if (this.user.tipoUsuario.includes(2))
      this.misProductos = true

  }


}
