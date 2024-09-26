import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormControl, FormGroup , Validators} from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {
  @Input() eitdToData:any;
  @Output() buttonClick = new EventEmitter<any>();  

  id:number=1;

  registerationForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',Validators.required),
    phone: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    education: new FormControl('',[Validators.required]),
  });
  onSubmit() {
    if (this.registerationForm.invalid) {
      alert("Fill the Form");
    }
    else{
      this.registerationForm.value.id=this.id;
      this.id=this.id+1;
      this.buttonClick.emit(this.registerationForm.value);
      this.registerationForm.reset();
    }
  } 

  disAble:boolean=true;
  updateButton:boolean=false;
  clearButton:boolean=false;
  
  update(){
    this.buttonClick.emit(this.registerationForm.value);
    this.registerationForm.reset();
    this.updateButton=false;
    this.disAble=true;
    this.clearButton=false;
  }
 
  clear(){
    this.registerationForm.reset();
    this.disAble=true;
    this.clearButton=false;
  }
  
  // Patch(){
  //   this.updateButton=true;
  //   this.registerationForm.patchValue(this.eitdToData.objToView);
  //   if (this.eitdToData.type=="View") {
  //     this.updateButton=false;
  //     this.clearButton=true;
  //   }
  //   this.disAble=false;
  // }

  ngOnChanges(){
    // console.log(this.eitdToData.type);
    if (this.eitdToData.type=="View") {
      this.updateButton=false;
      this.clearButton=true;
      this.disAble=false;
      this.registerationForm.patchValue(this.eitdToData.objToView);
    }
    if (this.eitdToData.type=="Edit") {
      this.updateButton=true;
      this.clearButton=false;
      this.disAble=false;
      this.registerationForm.patchValue(this.eitdToData.objToView);
    }
  }
  ngOnInit(){
    this.disAble=true;
    this.updateButton=false;
    this.clearButton=false;
  }
  
}
