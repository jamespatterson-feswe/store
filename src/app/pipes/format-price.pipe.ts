import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
export class FormatPricePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let returnValue = '$';
    let stringValue = value.toString().split('.');
    if (stringValue.length > 1) {
      returnValue = `${returnValue}${stringValue[0]}.${stringValue[1]}${stringValue[1].length < 2 ? 0 : ''}`;
    } else {
      returnValue = `${returnValue}${stringValue}.00`;
    }
    return returnValue;
  }

}
