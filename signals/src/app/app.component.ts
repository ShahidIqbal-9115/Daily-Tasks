import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SginalsComponentComponent } from './sginals-component/sginals-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SginalsComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signals';
}
