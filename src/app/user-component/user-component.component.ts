import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent {

  users = [
    {id: 1, name: 'Xiaomi Mi 11 Pro'},
    {id: 2, name: 'Xiaomi Mi 11 Ultra'},
    {id: 3, name: 'Xiaomi Mi 11'},
    {id: 4, name: 'Xiaomi Mi 11i'},
    {id: 5, name: 'Xiaomi Mi T11 Pro'},
    {id: 6, name: 'Xiaomi Mi Mix 4'},
    {id: 7, name: 'Xiaomi Mix Fold'},
    {id: 8, name: 'Xiaomi Mi 11X Pro'},
    {id: 9, name: 'Xiaomi Redmi K40 Pro'},
    {id: 10, name: 'Xiaomi Redmi K40 Pro+'},
  ];
}
