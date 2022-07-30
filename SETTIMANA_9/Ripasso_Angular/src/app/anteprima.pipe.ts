import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anteprima' // con le pipe possiamo all'interno delle graffe {{}} passare un valore della classe e modificarlo a seconda della pipe
})
export class AnteprimaPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.toUpperCase(); // in questo caso la pipe prenderà il valore e lo stranformerà tutto in GRANDE
  }

}
