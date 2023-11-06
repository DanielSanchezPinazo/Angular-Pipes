import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { OrderPageComponent } from '../pages/order/order.component';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy?: keyof Hero | ""): Hero[] {

// "keyof" obliga a que el argumento introducido como "sortBy" debe ser una propiedad del objeto de tipo "Hero"

    console.log( {heroes, sortBy} );

    switch( sortBy ) {

      case "name":

        return heroes.sort( (a, b) => ( a.name > b.name ) ? 1 : -1 );

      case "canFly":

        return heroes.sort( (a, b) => ( a.canFly > b.canFly ) ? 1 : -1 );

      case "color":

        if (OrderPageComponent.change) {

          // console.log(OrderPageComponent.change);
          OrderPageComponent.change = false;
          // console.log(OrderPageComponent.change);
          return heroes.sort( (a, b) => ( a.color > b.color ) ? 1 : -1 );

      } else {

          // console.log(OrderPageComponent.change);
          OrderPageComponent.change = true;
          // console.log(OrderPageComponent.change);
          return heroes.sort( (a, b) => ( a.color > b.color ) ? -1 : 1 );

        }

      default:

        return heroes;
    }
  }
}
