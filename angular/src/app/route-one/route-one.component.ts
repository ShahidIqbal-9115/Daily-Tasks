import { Component,OnInit, Input,EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../../services.service';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ReactiveFormsModule,FormControl, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-route-one',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './route-one.component.html',
  styleUrl: './route-one.component.css'
})
export class RouteOneComponent {

  @Output() updateDataEvent=new EventEmitter<any>();

  registerationForm = new FormGroup({
    Heading: new FormControl('',Validators.required),
    text: new FormControl('',Validators.required),
  });
  onSubmit() {
    if (this.registerationForm.invalid) {
      alert("Fill the Form");
    }
    else{
    //  console.warn(this.registerationForm.value);
      this.registerationForm.reset();
    }
  }
  name:string='';
  rank:string='';

  public employeeData:any= [];
  constructor(private _services:ServicesService){  }

  private subscription!: Subscription
  ngOnInit(){
   this.subscription=this._services.data$.subscribe(data=>{
    this.employeeData =data;
    });
  }

  submit(){
    if (this.name===''&& this.rank==='') {
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
