import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe',
  standalone: true
})
export class PipePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case '1':
        return 'for 1 Good';
      case '2':
        return 'for 2 Better';
      case '3':
        return 'for 3 Great';
      case '4':
        return 'Not Available';
      default:
        return 'Invalid Value';
    }
  }

}
