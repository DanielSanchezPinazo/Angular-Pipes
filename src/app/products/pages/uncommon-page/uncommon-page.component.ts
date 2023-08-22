import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select Pipe
  public name: string = "Daniel";
  public gender: "male" | "female" = "male";

  public invitationMap = {
    male: "invitarlo",
    female: "invitarla"
  }

  public changeClient(): void {

    if (this.gender == "male") {

      this.gender = "female";
      this.name = "Daniela"

    } else {

      this.gender = "male";
      this.name = "Daniel"

    }
  }

  // i18n Plural Pipe y Slice Pipe
  public clients: string[] = [ "María", "Melissa" , "Natalia" , "Daniel", "Antonio", "Alejandro" ];
  public clientsMap = {
    "=0": "no tenemos ningún cliente esperando.",
    "=1": "tenemos un cliente esperando.",
    // # será susutituido por el número proveniente de clients.length
    "other": "tenemos # clientes esperando."
  }

  public deleteClient(): void {

    this.clients.shift();
  }

  // KeyVlaue Pipe
  public person = {
    name: "Daniel",
    age: 41,
    address: "Alhaurin"
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000);

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve("Tenemos data en la promesa");
    }, 5500);
  });

}
