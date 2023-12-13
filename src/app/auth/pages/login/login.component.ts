import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { newLogin } from '../../../interface/auth.interface';
import { LoginService } from '../../../service/login-service.service'
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  loginInfo: any
  usuCorreo: any
  usuContrasena: any
  constructor(private loginService: LoginService, private router: Router, private cookieService: CookieService) { }

  loginForm = new FormGroup({
    correo: new FormControl(''),
    contrasena: new FormControl('')
  })

  newLogin: newLogin = {
    USU_CORREO: '',
    USU_CONTRASENA: '',
  }

  onSubmit() {
    this.usuCorreo = this.loginForm.value.correo;
    this.usuContrasena = this.loginForm.value.contrasena;

    try {
      this.loginService.login(this.usuCorreo, this.usuContrasena)
        .then((loginInfo) => {
          this.loginInfo = loginInfo;
          console.log(this.loginInfo);

          if (this.loginInfo && this.loginInfo.ok && this.loginInfo.token) {
            this.cookieService.set('token', this.loginInfo.token);
            console.log('token guardado');
            this.router.navigateByUrl('')
          } else {
            console.log(this.loginInfo.msg);
          }
        })
        .catch((error) => {
          console.error('Error al iniciar sesión:', error);
        });
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  }



}
