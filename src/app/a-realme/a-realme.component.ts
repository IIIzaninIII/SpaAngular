import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-realme',
  templateUrl: './a-realme.component.html',
  styleUrls: ['./a-realme.component.css']
})
export class ARealmeComponent {

  users = [
    {id: 1, name: 'Realme GT Flash'},
    {id: 2, name: 'Realme GT'},
    {id: 3, name: 'Realme X9 Pro'}
  ]

}
