import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], searchTerm?: any): any {
    if (!searchTerm){
      return array;
    }
    searchTerm = searchTerm.toLowerCase();

    return array.filter(function (item) {      //item je jedan ceo kontakt
      return item.firstName.toLowerCase().includes(searchTerm);

    });
  }

}
