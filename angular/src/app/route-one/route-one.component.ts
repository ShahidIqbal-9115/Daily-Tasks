import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../../services.service';


@Component({
  selector: 'app-route-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route-one.component.html',
  styleUrl: './route-one.component.css'
})
export class RouteOneComponent {

  public employeeData:any= [];
  constructor(private _services:ServicesService){  }

  ngOnInit(){
    this.employeeData=this._services.getData();
  }

  submit(){
    let nameinput=document.getElementById('name') as HTMLInputElement;
    let rankinput=document.getElementById('rank') as HTMLInputElement;
    console.log(nameinput?.value ,rankinput?.value+"one");
    if (nameinput.value===''&&rankinput.value==='') {
      alert("fill the form");
    }
    else{
      this._services.setData({name:nameinput.value,rank:rankinput.value});
      nameinput.value="";
      rankinput.value='';
    }
   
  }
}
