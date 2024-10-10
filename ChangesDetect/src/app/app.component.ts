import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReUseableCardComponent } from './re-useable-card/re-useable-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReUseableCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ChangesDetect';
}
