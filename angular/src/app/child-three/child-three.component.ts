import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-three',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child-three.component.html',
  styleUrl: './child-three.component.css'
})
export class ChildThreeComponent {

  heading: string='';  
  text: string='';     
  @Output() buttonClick = new EventEmitter<any>();  

  outputMessage: any = [];

  onButtonClick() {
    if (this.heading=='' && this.text=='') {
      alert("fill the form");
    }
    else{
      this.outputMessage=({'heading':this.heading,"text":this.text})
      this.buttonClick.emit(this.outputMessage);
      this.heading='';
      this.text='';

    }
  }
}
