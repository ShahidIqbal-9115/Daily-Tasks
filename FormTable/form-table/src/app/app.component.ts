import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { RouterOutlet , RouterLink ,RouterLinkActive } from '@angular/router';
import { ServiceForLocalService } from './service-for-local.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule ,RouterOutlet,TableComponent, RouterLink ,RouterLinkActive , FormComponent,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('slideToggleAnimation', [
      state('void', style({ width: '0', opacity: 0 })),
      state('*', style({ width: '*', opacity: 1 })),
      transition(':enter', [
        style({ width: '0', opacity: 0 }),
        animate('300ms ease-out', style({ width: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ width: '*', opacity: 1 }),
        animate('300ms ease-in', style({ width: '0', opacity: 0 }))
      ])
    ])
  ]

})
export class AppComponent {
  constructor(private DataFormStore: ServiceForLocalService) { }
  isVisible: boolean = true; 

  toggleDisplay() {
    this.isVisible = !this.isVisible; 
  }
  title = 'form-table';
}
