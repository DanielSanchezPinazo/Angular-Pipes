import { Component } from '@angular/core';

import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderPageComponent {

  public heroes: Hero[] = [
    {
      name: "Superman",
      canFly: true,
      color: Color.blue
    },
    {
      name: "Batman",
      canFly: false,
      color: Color.black
    },
    {
      name: "Daredevil",
      canFly: false,
      color: Color.red
    },
    {
      name: "Deadpool",
      canFly: false,
      color: Color.red
    },
    {
      name: "Linterna Verde",
      canFly: true,
      color: Color.green
    }
  ];

  public orderBy?: keyof Hero;

  public static change: boolean = true;

  public isUpperCase: boolean = false;

  public toggleUpperCase(): void {

    this.isUpperCase = !this.isUpperCase;
  }

  public changeOrder( value: keyof Hero ) {

    this.orderBy = value;
  }

}
