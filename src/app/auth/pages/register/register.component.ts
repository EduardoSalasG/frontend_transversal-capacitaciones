import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../../service/register.service';
import { newUser } from '../../../interface/auth.interface';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export default class RegisterComponent {

  constructor(private registerService: RegisterService) { }

  registroForm = new FormGroup({
    nombre: new FormControl(''),
    apellidoPat: new FormControl(''),
    apellidoMat: new FormControl(''),
    rut: new FormControl(''),
    correo: new FormControl(''),
    contrasena: new FormControl(''),
    genero: new FormControl(''),
  })


  newUser: newUser = {
    USU_NOMBRE: '',
    USU_APELLIDO_PAT: '',
    USU_APELLIDO_MAT: '',
    USU_RUT: '',
    USU_CORREO: '',
    USU_CONTRASENA: '',
    USU_GENERO: false
  }

  onSubmit() {
    console.warn(this.registroForm.value);
    // this.registerService.createUser(this.newUser)
  }

}
