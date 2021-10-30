import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usernameFilter'
})
export class UsernameFilterPipe implements PipeTransform {

  transform(value: string, size: number = 8): string {
    return value.substring(0 ,size);
  }

}
