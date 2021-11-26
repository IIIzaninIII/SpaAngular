import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-asus',
  templateUrl: './a-asus.component.html',
  styleUrls: ['./a-asus.component.css']
})
export class AAsusComponent {

  users = [
    {id: 1, name: 'Asus Rog Phone 5S'},
    {id: 2, name: 'Asus Rog Phone 5S Pro'},
    {id: 3, name: 'Asus Rog Phone 5'},
    {id: 4, name: 'Asus Zenfone 8'},
    {id: 5, name: 'Asus Zenfone 8 Flip'} 
  ]

}
