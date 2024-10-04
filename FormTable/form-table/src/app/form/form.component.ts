import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ServiceForLocalService } from '../service-for-local.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { DialogOverviewExample } from '../dai-log/dai-log.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [DialogOverviewExample, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatIconModule, CommonModule, ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  constructor(private DataFormStore: ServiceForLocalService, private router: Router) { }

  localstore: any = [];
  disAble: boolean = true;
  updateButton: boolean = false;
  clearButton: boolean = false;
  showsucessMessage: boolean = false;

  registerationForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    // website: new FormControl('', [Validators.required]),
  });
  onSubmit() {
    if (this.registerationForm.invalid) {
      // alert("Fill Form");
    }
    else {
      let dataFromLocal = this.DataFormStore.get('local');
      if (dataFromLocal == null) {
        this.registerationForm.value.id = 1;
        this.localstore.push(this.registerationForm.value);
        this.DataFormStore.set('local', this.localstore);
      } else {
         // post Method to Api
         this.DataFormStore.postdataDataToApi(this.registerationForm.value).subscribe(
          (response) => {
            console.log("Post/Submit On APi",response);
          },
          (error) => {
            console.error('Error fetching data:', error);
          },
        );
       
        this.submitConfrim();
        // data submit to local Store 
        this.registerationForm.value.id = dataFromLocal[dataFromLocal.length - 1].id + 1;
        // dataFromLocal.push(this.registerationForm.value);
        dataFromLocal.unshift(this.registerationForm.value);
        this.DataFormStore.set('local', dataFromLocal);
        setTimeout(() => {
          // this.showsucessMessage=true;
          this.SaveSucess();
          // this.router.navigate(['/table']);
        }, 1000);
        
      }
      this.registerationForm.reset();
    }
  }


  update() {
    // data Updata on Api
    this.DataFormStore.updataDataToApi(this.registerationForm.value,this.registerationForm.value.id).subscribe(
      (response) => {
        console.log("Put/Update on Api",response);
      },
      (error) => {
        console.error('Error fetching data:', error);
      },
    );
    this.submitConfrim();
    setTimeout(() => {
      this.SaveSucess();
      this.router.navigate(['/table']);
    }, 1000);

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
  }

  clear() {
    this.registerationForm.reset();
    this.DataFormStore.storeDataForPatch(this.registerationForm.value, this.registerationForm.value.id);
    this.submitConfrim();
    setTimeout(() => {
      // this.SaveSucess();
      this.router.navigate(['/table']);
    }, 1000);
    this.disAble = true;
    this.clearButton = false;
  }

  patch() {
    const retrievedData = this.DataFormStore.getData();
    if (retrievedData.action === "View") {
      this.updateButton = false;
      this.clearButton = true;
      this.disAble = false;
      // console.log(retrievedData.data);
      this.registerationForm.patchValue(retrievedData.data);
    }
    if (retrievedData.action === "Edit") {
      this.updateButton = true;
      this.clearButton = false;
      this.disAble = false;
      this.registerationForm.patchValue(retrievedData.data);
    }
  }

  ngOnInit() {
    this.disAble = true;
    this.updateButton = false;
    this.clearButton = false;
    this.patch();
  }

  readonly dialog = inject(MatDialog);
  submitConfrim(): void {

    const dialogRef = this.dialog.open(spinnerDailog, {
    });

    setTimeout(() => {
      dialogRef.close();
    }, 1000);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
    });

  }

  SaveSucess(): void {

    const dialogRef = this.dialog.open(Save, {
    });

    setTimeout(() => {
      dialogRef.close();
      this.router.navigate(['/table']);
    }, 1000);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
    });

  }


}



@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'spiner.html',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, CommonModule, MatProgressSpinnerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class spinnerDailog {

  constructor(public dialogRef: MatDialogRef<spinnerDailog>) {
  }


}

@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'Save.html',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Save {

  constructor(public dialogRef: MatDialogRef<Save>) {
  }


}

