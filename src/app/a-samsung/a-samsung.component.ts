import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-samsung',
  templateUrl: './a-samsung.component.html',
  styleUrls: ['./a-samsung.component.css']
})
export class ASamsungComponent {

  users = [
    {id: 1, name: 'Samsung Galaxy S21'},
    {id: 2, name: 'Samsung Galaxy S21+'},
    {id: 3, name: 'Samsung Galaxy S21 Ultra'},
    {id: 4, name: 'Samsung Galaxy Z Flip 3'},
    {id: 5, name: 'Samsung Galaxy Z Fold 3'},
    {id: 6, name: 'Samsung W22'}
  ]

}
