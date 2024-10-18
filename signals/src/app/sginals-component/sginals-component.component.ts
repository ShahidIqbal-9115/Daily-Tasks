import { Component, DoCheck, signal, computed, effect, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sginals-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sginals-component.component.html',
  styleUrl: './sginals-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SginalsComponentComponent implements DoCheck {

  constructor() {
    // effect function is use to target the signals value and perfrom some task when ever signals value changes
    effect(() => console.log('NEW COUNTER VALUE = ' + this.counter()));
  }

  counter = signal<number>(0);
  message = signal<string[]>([]);

  // computed() function is use to target and manipulate value of any signal 
  doubleCounter = computed(() => this.counter() * 2);

  increment() {
    this.counter.update((old) => old + 1);
    this.message.update((prevValue) => [...prevValue, 'Current value of counter is: ' + this.counter()]);
  }

  decrement() {
    this.counter.update((old) => {
      if (old > 0) {
        return old - 1;
      }
      return old;
    });
    this.message.update((prevValue) => {
      if (prevValue.length > 0) {
        prevValue.pop();
      }
      return prevValue;
    });
  }

  ngDoCheck() {
    console.log('CHANGE DETECTION CYCLE CALLED');
  }

  // check diff in normarl and signal variable 
  // signal don't need ng.Zone while normal variable need ng.Zone for track update
  count: number = 0;
  ngAfterViewInit(){
    this.count = this.count + 11;
    setTimeout(() => {
      this.counter.update((old) => old + 1);
    }, 3000);
  
  }

}
