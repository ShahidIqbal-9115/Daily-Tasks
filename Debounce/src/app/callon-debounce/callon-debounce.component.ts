import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ApiserService } from '../apiser.service';

@Component({
  selector: 'app-callon-debounce',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './callon-debounce.component.html',
  styleUrl: './callon-debounce.component.css'
})
export class CallonDebounceComponent {

  constructor(private apiser:ApiserService) {}
  results:any;

  reForm = new FormGroup({
    search: new FormControl('', [Validators.required]),
  });

  onSubmit(){
    if (this.reForm.valid) {
      console.log(this.reForm.value);
    }
  }

  ngOnInit() {
    this.reForm.get('search')?.valueChanges
      .pipe(
        debounceTime(2000),
        distinctUntilChanged(),
        switchMap((term: any) => { return this.apiser.getinfo(term);}),
      )
      .subscribe(results => { 
        this.results=results;
        console.log("Search results:", results);
      });
  }

}
