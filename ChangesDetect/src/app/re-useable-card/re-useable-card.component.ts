import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit ,NgZone} from '@angular/core';
import { LocalservicesService } from '../localservices.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-re-useable-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './re-useable-card.component.html',
  styleUrl: './re-useable-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReUseableCardComponent implements OnInit {

  constructor(private cdref: ChangeDetectorRef, private ser: LocalservicesService,private ngZone: NgZone) { }

  name: string = 'shahid';
  table: any;

  ngOnInit(): void {
    this.ngZone.run(() => {
      
      this.ser.getDataFromApi().subscribe(
        (response) => {
          this.name = 'shahid Iqbal';
          this.table = response;
          setTimeout(() => {
            this.cdref.detectChanges();
          }, 5000);
        },
        (error) => {
          console.error('Error fetching data:', error);
        },
      );
    });

    // this.ser.getDataFromApi().subscribe(
    //   (response) => {
    //     this.name = 'shahid Iqbal';
    //     this.table = response;
    //      setTimeout(() => {
    //        this.cdref.detectChanges();
    //      }, 3000);
    //   },
    //   (error) => {
    //     console.error('Error fetching data:', error);
    //   },
    // );
  
  }

  startProcess() {
    this.ngZone.runOutsideAngular(() => {
      this.ser.getDataFromApi().subscribe(
        (response) => {
          this.name = 'shahid Iqbal';
          this.table = response;
          // setTimeout(() => {
          //   this.cdref.detectChanges();
          // }, 3000);
        },
        (error) => {
          console.error('Error fetching data:', error);
        },
      );
    });
  }




}
