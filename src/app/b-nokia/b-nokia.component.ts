import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-nokia',
  templateUrl: './b-nokia.component.html',
  styleUrls: ['./b-nokia.component.css']
})
export class BNokiaComponent {

  users = [
    {id: 1, name: 'Nokia G300'},
    {id: 2, name: 'Nokia G50'},
    {id: 3, name: 'Nokia XR20'},
    {id: 4, name: 'Nokia X10'},
    {id: 5, name: 'Nokia X20'}
  ]

}
