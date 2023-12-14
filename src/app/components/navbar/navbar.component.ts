import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../service/auth.service';

interface UserToken {
  id: number
  nombre: string
  email: string
  tipoUsuario: number[]
}


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(private cookieService: CookieService,
    private authService: AuthService,
    private router: Router
  ) { }

  private token: string = ''
  public tokenValid: boolean = false
  public vendor: boolean = false

  public user: UserToken = {
    id: 0,
    nombre: '',
    email: "",
    tipoUsuario: []
  }



  async ngOnInit() {
    this.token = this.cookieService.get('token')
    await this.validarToken()
    // await this.updateNavBar()
  }

  async validarToken() {
    if (this.token !== '') {
      console.log('Token lleno')
      await this.authService.validarToken(this.token)
        .then((resp) => {
          console.log('Respuesta del servicio', resp)
          if (resp) {
            this.tokenValid = resp.tokenValid
            this.vendor = resp.vendor
            this.user = resp.user
            console.log(this.tokenValid, this.vendor, this.user)
          }
        })

    }
    console.log(this.token)

  }

  // async updateNavBar() {
  //   if (this.user.id) this.tokenValid = true

  //   if (this.user.tipoUsuario.includes(2)) this.vendor = true
  //   console.log(this.tokenValid, this.vendor)



  // }

  cerrarSesion() {
    this.cookieService.delete('token')
    this.router.navigateByUrl('')
  }

  reloadPage() {
    // Recarga la página actual
    window.location.reload();
  }


}
