import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink, RouterLinkActive} from '@angular/router';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'TailwindINAngular';
  call(){
    alert('Call');
  }
}
