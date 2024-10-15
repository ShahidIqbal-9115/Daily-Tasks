import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TableComponent,FormComponent,CommonModule,MatIconModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('slideToggleAnimation', [
      state('void', style({ width: '0', opacity: 0 })),
      state('*', style({ width: '*', opacity: 1 })),
      transition(':enter', [
        style({ width: '0', opacity: 0 }),
        animate('600ms ease-out', style({ width: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ width: '*', opacity: 1 }),
        animate('300ms ease-in', style({ width: '0', opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent {

  constructor(private router:Router){}

  isVisible: boolean = true; 

  toggleDisplay() {
    this.isVisible = !this.isVisible; 
  }

  navitotable(){
    this.router.navigate(['/table']);
  }

  navitoform(){
    this.router.navigate(['/forms/add/new']);
  }
  
  title = 'API-Curd';
}
