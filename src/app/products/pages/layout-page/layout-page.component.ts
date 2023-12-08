import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule, NavbarComponent, FooterComponent
  ],
  templateUrl: `./layout-page.component.html`,
  styleUrl: './layout-page.component.css',
})
export default class LayoutPageComponent { }
