import { Component } from '@angular/core';
import { PipePipe } from '../Pipes/pipe.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-pipe',
  standalone: true,
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.css',
  imports: [PipePipe, FormsModule, CommonModule],
})
export class CustomPipeComponent {
  number: any;

  // int:any=[1,2,3,4];
}
