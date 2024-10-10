import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DirectiveDirective } from '../directive/directive.directive';
import { CommonModule } from '@angular/common';
import { PipePipe } from '../Pipes/pipe.pipe';
@Component({
  selector: 'app-custom-directive',
  standalone: true,
  imports: [PipePipe, FormsModule, DirectiveDirective, CommonModule],
  templateUrl: './custom-directive.component.html',
  styleUrl: './custom-directive.component.css'
})
export class CustomDirectiveComponent {


  style: any[] = [
    { fontWeight: 'normal', color: 'red' },
    { fontWeight: 'bolder', color: 'blue' },
    { fontWeight: 'bolder', color: 'green' }
  ]

  itostring(i: any) {
    return JSON.stringify(i);
  }

}


