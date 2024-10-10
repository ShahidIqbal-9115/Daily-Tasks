import { Component } from '@angular/core';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CustomPipeComponent,CustomDirectiveComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
 

  

 

  title = 'Custom-directive-and-custom-pipe';
}
