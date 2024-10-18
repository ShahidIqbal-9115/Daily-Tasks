import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CallonDebounceComponent } from './callon-debounce/callon-debounce.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CallonDebounceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'Debounce';
}
