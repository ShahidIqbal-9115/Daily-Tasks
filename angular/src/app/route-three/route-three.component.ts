import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../../services.service';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ReactiveFormsModule,FormControl, FormGroup , Validators} from '@angular/forms';


@Component({
  selector: 'app-route-three',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './route-three.component.html',
  styleUrl: './route-three.component.css'
})
export class RouteThreeComponent {

  registerationForm = new FormGroup({
    Heading: new FormControl('',Validators.required),
    text: new FormControl('',Validators.required),
  });
  onSubmit() {
    if (this.registerationForm.invalid) {
      alert("Fill the Form");
    }
    else{
      console.log(this.registerationForm.value);
      this.registerationForm.reset();
    }
  }


  name:string='';
  rank:string='';

  public employeeData:any= [];
  constructor(private _services:ServicesService){  }

  private subscription!: Subscription
  ngOnInit(){
      this.subscription=this._services.data$.subscribe(d=>{
      this.employeeData =d;
      });
  }

  submit(){
    if (this.name==='' && this.rank==='') {
      alert("fill the form");
    }
    else{
      this._services.setData({name:this.name,rank:this.rank});
      this.name="";
      this.rank='';
    }
  }

  ngOnDestroy():void{
    if (this.subscription) {
        this.subscription.unsubscribe();      
    }
  }
}
