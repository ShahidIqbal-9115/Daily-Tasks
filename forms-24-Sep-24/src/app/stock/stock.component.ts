import { Component } from '@angular/core';
import { TableComponent } from '../forms/table/table.component';
@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent {
  resueableFormData: any[] = [{ key: 'id', lable: 'ID' }, { key: 'name', lable: 'Name' }, { key: 'email', lable: 'Email' }, { key: 'phone', lable: 'Phone' }, { key: 'address', lable: 'Address' }, { key: 'education', lable: 'Education', },{key:'actions',lable:'Actions'}];

  tableRecord: any[] = [
    { id: 1, name: 'shahid', email: ' m.shahid9115@gmail.com', phone: ' 0102030405', address: "abc", education: "BSCS" },
    { id: 2, name: 'ahmad', email: ' m.shahid9115@gmail.com', phone: ' 0102030405', address: "abc", education: "BSCS" },
    { id: 3, name: 'asif', email: ' m.shahid9115@gmail.com', phone: ' 0102030405', address: "abc", education: "BSCS" },
    { id: 4, name: 'shahzad', email: ' m.shahid9115@gmail.com', phone: ' 0102030405', address: "abc", education: "BSCS" },
    { id: 5, name: 'Arslan', email: ' m.shahid9115@gmail.com', phone: ' 0102030405', address: "abc", education: "BSCS" },
    { id: 6, name: 'Usama', email: ' m.shahid9115@gmail.com', phone: ' 0102030405', address: "abc", education: "BSCS" }
  ]
  actions: any[] = ['Delete']
}
