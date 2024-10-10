import { Component } from '@angular/core';

@Component({
  selector: 'app-component-two',
  standalone: true,
  imports: [],
  templateUrl: './component-two.component.html',
  styleUrl: './component-two.component.css'
})
export class ComponentTwoComponent {
  title:string='';
  currentData(){
    return new Date();
  }
}
