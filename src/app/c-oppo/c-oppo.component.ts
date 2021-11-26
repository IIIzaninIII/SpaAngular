import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-oppo',
  templateUrl: './c-oppo.component.html',
  styleUrls: ['./c-oppo.component.css']
})
export class COppoComponent {

  users = [
    {id: 1, name: 'Oppo A54 5G'},
    {id: 2, name: 'Oppo A74 5G'},
    {id: 3, name: 'Oppo A93 5G'}
  ]

}
