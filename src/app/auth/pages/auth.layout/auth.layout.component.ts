import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';

@Component({
  selector: 'app-auth.layout',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  templateUrl: './auth.layout.component.html',
  styleUrl: './auth.layout.component.css'
})
export default class AuthLayoutComponent {

}
