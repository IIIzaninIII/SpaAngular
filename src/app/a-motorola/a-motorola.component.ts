import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-motorola',
  templateUrl: './a-motorola.component.html',
  styleUrls: ['./a-motorola.component.css']
})
export class AMotorolaComponent {

  users = [
    {id: 1, name: 'Motorola Edge S Pro'},
    {id: 2, name: 'Motorola Moto Edge 20 Pro'},
    {id: 3, name: 'Motorola Moto G100'},
    {id: 4, name: 'Motorola Edge S'},
  ]

}
