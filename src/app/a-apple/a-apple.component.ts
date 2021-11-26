import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-apple',
  templateUrl: './a-apple.component.html',
  styleUrls: ['./a-apple.component.css']
})
export class AAppleComponent {

  users = [
    {id: 1, name: 'iPhone 13 Pro Max'},
    {id: 2, name: 'iPhone 13 Pro'},
    {id: 3, name: 'iPhone 13'},
    {id: 4, name: 'iPhone 13 mini'}
  ]

}
