import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AboutComponent } from "../about/about.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  

}
