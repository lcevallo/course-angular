import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting'
})
export class GreetingPipe implements PipeTransform {

  transform(name: string, gender: string, role: string = 'Usuario' ): any {
    let grt = '';
    switch (gender) {
      case 'F':
        grt = 'Bienvenida';
        break;
      case 'M':
        grt = 'Bienvenido';
        break;
      default:
        grt = 'Bienvenid@';
        break;
    }
    return `${grt} ${name}, tienes permisos de ${role}`;
  }

}
