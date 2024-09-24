import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-one',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.css'
})
export class ChildOneComponent {
  
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
