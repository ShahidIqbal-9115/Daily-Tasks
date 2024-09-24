import { Component } from '@angular/core';
// import { Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-one',
  standalone: true,
  imports: [FormsModule,CardComponent,CommonModule],
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.css'
})
export class ChildOneComponent {
  
  // heading: string='';  
  // text: string='';     
  // @Output() buttonClick = new EventEmitter<any>();  

  // outputMessage: any = [];

  // onButtonClick() {
  //   if (this.heading=='' && this.text=='') {
  //     alert("fill the form");
  //   }
  //   else{
  //     this.outputMessage=({'heading':this.heading,"text":this.text})
  //     this.buttonClick.emit(this.outputMessage);
  //     this.heading='';
  //     this.text='';
  //   }
  // }
 
  sendData:any={heading:"Component One",text:"Enter Data To Send"};
  outputMessage:any =[];
  
  onActivate(data: any) {
    this.outputMessage.push(data);
  }
}
