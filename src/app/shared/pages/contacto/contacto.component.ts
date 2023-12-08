import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ReactiveFormsModule, FooterComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export default class ContactoComponent {

  contactoForm = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    mensaje: new FormControl('')
  })



  onSubmit() {
    console.log(this.contactoForm.value)
  }


}
