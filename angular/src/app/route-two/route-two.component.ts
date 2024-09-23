import { Component } from '@angular/core';
import { ServicesService } from '../../services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-route-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route-two.component.html',
  styleUrl: './route-two.component.css'
})
export class RouteTwoComponent {

  public employeeData:any= [];
  constructor(private _services:ServicesService){  }

  ngOnInit(){
    this.employeeData=this._services.getData();
  }

  submit(){
    let nameinput=document.getElementById('name') as HTMLInputElement;
    let rankinput=document.getElementById('rank') as HTMLInputElement;
    console.log(nameinput?.value ,rankinput?.value);
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
