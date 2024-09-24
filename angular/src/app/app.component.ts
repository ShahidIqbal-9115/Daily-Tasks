import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink ,RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../services.service';
import { RouteOneComponent } from './route-one/route-one.component';
import { RouteTwoComponent } from './route-two/route-two.component';
import { RouteThreeComponent } from './route-three/route-three.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,CommonModule, RouterLink,
    RouterLinkActive ,RouteOneComponent,RouteTwoComponent,RouteThreeComponent],
  providers:[ServicesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  outputMessage:any =[];
  
  onActivate(data: any) {
    if (data.buttonClick) {
      data.buttonClick.subscribe((message: string) => {
        this.outputMessage.push(message);
        console.log(this.outputMessage);
      });
    }
  }

  data:any=[];

  updateData(item:any){
      console.log(item);
      this.data.push(item);
  }

}
