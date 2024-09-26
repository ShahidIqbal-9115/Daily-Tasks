import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() getData: any;
  @Input() actions: any;
  @Input() dataForHeading: any;
  @Input() actionsHeading: any;
  @Output() toSent = new EventEmitter<any>();

  Delete(itemId: any) {
    let userResponse = confirm("Do You Want to Delete This");
    if (userResponse) {
      this.getData.forEach((e: any, index: number) => {
        if (e.id == itemId) {
          this.getData.splice(index, 1);
        }
      });
    }
  }

  View(itemId: any) {
    const objToView = this.getData.find((obj: any) => obj.id === itemId);
    this.toSent.emit({ objToView, type: 'View' });
  }

  Edit(itemId: any) {
    const objToView = this.getData.find((obj: any) => obj.id === itemId);
    this.toSent.emit({ objToView, type: 'Edit' });
  }

  call(id: any, lable: any) {
    if (lable == "View") {
      this.View(id);
    }
    if (lable == "Delete") {
      this.Delete(id);
    }
    if (lable == "Edit") {
      this.Edit(id);
    }
  }

}
