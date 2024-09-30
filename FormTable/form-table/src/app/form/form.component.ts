import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ServiceForLocalService } from '../service-for-local.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

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
        this.registerationForm.value.id = dataFromLocal.length + 1;
        dataFromLocal.push(this.registerationForm.value);
        this.DataFormStore.set('local', dataFromLocal);
        if (!confirm("Do You Want to Add Multipules Records")) {
          this.router.navigate(['']);
        }
      }
      this.registerationForm.reset();
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

  ngOnInit() {
    this.disAble = true;
    this.updateButton = false;
    this.clearButton = false;
    this.patch();
  }


}
