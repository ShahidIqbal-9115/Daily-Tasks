import { Component } from '@angular/core';
import { NewUserComponent } from './new-user/new-user.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [NewUserComponent, TableComponent, FormsModule, CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})

export class FormsComponent {

  handelGetData(data: any) {
    let found=false;
    this.outputMessage.forEach((item: any, index: any) => {
      if (item.id == data.id) {    
        this.outputMessage[index] = data;
        found=true;
      }
    });
    if (!found) {
      this.outputMessage.push(data); 
    }   
  }
  
  outputMessage: any = [];

  dataToEdit: any;
  handelDataToEdit(data: any) {
    this.dataToEdit = data;
  }

  resueableFormData:any[]=[{key:'id',lable:'ID'},{key:'name',lable:'Name'},{key:'email',lable:'Email'},{key:'phone',lable:'Phone'},{key:'address',lable:'Address'},{key:'education',lable:'Education'},{key:'actions',lable:'Actions'}];
  
  actions: any[] = ['View','Edit','Delete']
}
