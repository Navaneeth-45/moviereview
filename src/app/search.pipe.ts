import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchTerm:string): any[] {
   
    if(!items || !searchTerm){
      return items;
    }
    else{
      return items.filter((itemObj) => itemObj.title.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1 )
      
    }
  }

}
