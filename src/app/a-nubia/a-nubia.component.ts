import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-nubia',
  templateUrl: './a-nubia.component.html',
  styleUrls: ['./a-nubia.component.css']
})
export class ANubiaComponent {

  users = [
    {id: 1, name: 'Nubia Red Magic 6 Pro'},
    {id: 2, name: 'Nubia Red Magic 6'},
    {id: 3, name: 'Nubia Red Magic 6R'},
    {id: 4, name: 'Nubia Z30 Pro'}
  ]

}
