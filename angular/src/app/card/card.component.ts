import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
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

  @Input() getData:any;
  

}
