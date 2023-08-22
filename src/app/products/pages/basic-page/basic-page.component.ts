import { Component } from '@angular/core';

@Component({
  selector: 'products-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  public nameLower: string = "daniel";
  public nameUpper: string = "DANIEL";
  public fullName: string = "DaNIeL SanCHEz";

  public customDate: Date = new Date();

}
