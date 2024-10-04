import { Component } from '@angular/core';

@Component({
  selector: 'app-component-three',
  standalone: true,
  imports: [],
  templateUrl: './component-three.component.html',
  styleUrl: './component-three.component.css'
})
export class ComponentThreeComponent {
  title:string='';
  currentData(){
    return new Date();
  }
}
