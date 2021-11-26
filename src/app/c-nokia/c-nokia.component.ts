import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-nokia',
  templateUrl: './c-nokia.component.html',
  styleUrls: ['./c-nokia.component.css']
})
export class CNokiaComponent {

  users = [
    {id: 1, name: 'Nokia C30'},
    {id: 2, name: 'Nokia 1L Pro'},
    {id: 3, name: 'Nokia C20 Plus'},
    {id: 4, name: 'Nokia C01 Plus'},
    {id: 5, name: 'Nokia G20'},
    {id: 6, name: 'Nokia G10'},
    {id: 7, name: 'Nokia C20'},
    {id: 8, name: 'Nokia 1.4'},
    {id: 9, name: 'Nokia C10'}
  ]

}
