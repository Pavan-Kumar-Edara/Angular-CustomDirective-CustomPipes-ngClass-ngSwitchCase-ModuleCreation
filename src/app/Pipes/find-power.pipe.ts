import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findPower'
})
export class FindPowerPipe implements PipeTransform {

  transform(value: number, exponent:number): number {
    return Math.pow(value,exponent);
  }

}
