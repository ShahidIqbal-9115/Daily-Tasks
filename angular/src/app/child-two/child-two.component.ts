import { Component, input } from '@angular/core';
import { ReactiveFormsModule,FormControl, FormGroup , Validators} from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-two',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './child-two.component.html',
  styleUrl: './child-two.component.css'
})
export class ChildTwoComponent {

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
