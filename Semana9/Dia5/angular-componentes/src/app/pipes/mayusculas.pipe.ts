import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // algoritmo para devolver el texto con las primeras letras
    // en mayusculas
    return value + " FIN";
  }

}
