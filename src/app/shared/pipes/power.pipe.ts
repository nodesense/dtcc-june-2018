import { Pipe, PipeTransform } from '@angular/core';

// stateless /pure pipe

// m^n   {{ 3 | power: 2}} => 9
// {{ 2 | power }} => 2
@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  constructor() {
    console.log("Power Pipe Created")
  }

  transform(value: number, exponent:number = 1): number {
    console.log("power transform ", value, exponent)
    return Math.pow(value, exponent);
  }

}
