import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { RouterOutlet , RouterLink ,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TableComponent, RouterLink ,RouterLinkActive , FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-table';
}
