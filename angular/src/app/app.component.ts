import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink ,RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,CommonModule, RouterLink,
    RouterLinkActive],
  providers:[ServicesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
