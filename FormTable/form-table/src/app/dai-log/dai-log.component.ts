
import {ChangeDetectionStrategy, Component, inject, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceForLocalService } from '../service-for-local.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dai-log.component.html',
  standalone: true,
  imports: [MatFormFieldModule,ReactiveFormsModule, MatInputModule, FormsModule, MatButtonModule,CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogOverviewExample {
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  } 
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dailog.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class DialogOverviewExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogOverviewExampleDialog>);
  constructor(private DataFormStore: ServiceForLocalService, private router: Router) { }
  localstore: any = [];
  disAble: boolean = true;
  updateButton: boolean = false;
  clearButton: boolean = false;

  registerationForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });
  onSubmit() {
    if (this.registerationForm.invalid) {
      alert("Fill Form");
    }
    else {
      let dataFromLocal = this.DataFormStore.get('local');
      if (dataFromLocal == null) {
        this.registerationForm.value.id = 1;
        this.localstore.push(this.registerationForm.value);
        this.DataFormStore.set('local', this.localstore);
      } else {
        this.registerationForm.value.id = dataFromLocal[dataFromLocal.length-1].id + 1;
        dataFromLocal.push(this.registerationForm.value);
        this.DataFormStore.set('local', dataFromLocal);
        if (!confirm("Do You Want to Add Multipules Records")) {
          this.router.navigate(['']);
          window.location.reload();
        }
        this.dialogRef.close(this.DataFormStore.get('local'));
      }
    }
  }

  update() {
    let dataFromLocal = this.DataFormStore.get('local');
    let dataUpdate = this.registerationForm.value;
    dataFromLocal.forEach((item: any, index: any) => {
      if (item.id == dataUpdate.id) {
        dataFromLocal[index] = dataUpdate;
      }
    });
    this.DataFormStore.set('local', dataFromLocal);
    this.registerationForm.reset();
    this.DataFormStore.storeDataForPatch(this.registerationForm.value,this.registerationForm.value.id);
    this.updateButton = false;
    this.disAble = true;
    this.clearButton = false;
    this.router.navigate(['']);
  }

  clear() {
    this.registerationForm.reset();
    this.DataFormStore.storeDataForPatch(this.registerationForm.value,this.registerationForm.value.id);
    this.disAble = true;
    this.clearButton = false;
    this.router.navigate(['']);
  }

  patch() {
    const retrievedData = this.DataFormStore.getData();

    if (retrievedData.action === "View") {
      this.updateButton = false;
      this.clearButton = true;
      this.disAble = false;
      this.registerationForm.patchValue(retrievedData.data);
    }
    if (retrievedData.action === "Edit") {
      this.updateButton = true;
      this.clearButton = false;
      this.disAble = false;
      this.registerationForm.patchValue(retrievedData.data);

    }

  }

  


  onNoClick(): void {
    this.dialogRef.close();
  }
}
