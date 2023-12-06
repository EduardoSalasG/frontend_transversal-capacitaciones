import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { newLogin } from '../../../interface/auth.interface';
import { LoginService } from '../../../service/login-service.service'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {

  constructor(private loginService: LoginService) { }

  loginForm = new FormGroup({
    correo: new FormControl(''),
    contrasena: new FormControl('')
  })

  newLogin: newLogin = {
    USU_CORREO: '',
    USU_CONTRASENA: '',
  }

  onSubmit() {
    console.log(this.loginForm.value)
  }


}
