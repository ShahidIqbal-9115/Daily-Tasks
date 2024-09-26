import { Component } from '@angular/core';
import { RouterOutlet , RouterLink ,RouterLinkActive } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { StockComponent } from './stock/stock.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive, FormsComponent,StockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';

}
