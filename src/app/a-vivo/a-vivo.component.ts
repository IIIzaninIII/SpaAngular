import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-vivo',
  templateUrl: './a-vivo.component.html',
  styleUrls: ['./a-vivo.component.css']
})
export class AVivoComponent {

  users = [
    {id: 1, name: 'Vivo iQOO 7'},
    {id: 2, name: 'Vivo iQOO 8 Pro'},
    {id: 3, name: 'Vivo iQOO 8'},
    {id: 4, name: 'Vivo X60 Pro+'},
    {id: 5, name: 'Vivo X60T Pro+'},
    {id: 6, name: 'Vivo X70 Pro+'}
  ]

}
