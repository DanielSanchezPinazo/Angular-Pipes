import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  public menuItems: MenuItem[] | undefined;

  ngOnInit() {
      this.menuItems = [
          // {
          //     label: 'New',
          //     icon: 'pi pi-fw pi-plus',
          // },
          // {
          //     label: 'Download',
          //     icon: 'pi pi-fw pi-download'
          // },
          // {
          //   label: 'Refresh',
          //   icon: 'pi pi-fw pi-refresh'
          // }
          {
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items: [
              {
                label: "Textos y Fechas",
                icon: 'pi pi-align-left',
                routerLink: "*"
              },
              {
                label: "Números",
                icon: 'pi pi-dollar',
                routerLink: "numbers"
              },
              {
                label: "No comunes",
                icon: 'pi pi-globe',
                routerLink: "uncommon"
              }
            ]
          },

          {
            label: "Pipes personalizados",
            icon: 'pi pi-cog',
            items: [
              {
                label: "Otro elemento",
                icon: 'pi pi-cog',
              },
            ]
          },
      ];
  }

}