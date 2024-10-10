import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-three',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule,CommonModule],
  templateUrl: './component-three.component.html',
  styleUrl: './component-three.component.css'
})
export class ComponentThreeComponent {
  id: number = 1;
  showFormData:boolean=false;

  registerationForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    skills:new FormArray ([
      new FormControl(null, Validators.required),
      new FormControl(null, Validators.required),
      new FormControl(null, Validators.required)
    ]),
  });

  public get contacts() : FormArray {
    return this.registerationForm.get('skills') as FormArray;
  }
  
  onSubmit() {
    if (this.registerationForm.invalid) {
      alert("Fill Form");
    }
    else {
      this.registerationForm.value.id = this.id;
      this.id = this.id + 1;
      console.log(this.registerationForm.value);
      alert('Submit sucessfully');
      this.showFormData=true;
      // this.registerationForm.reset();
    }
  }

  title: string = '';
  currentData() {
    return new Date();
  }
}
