import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-oneplus',
  templateUrl: './b-oneplus.component.html',
  styleUrls: ['./b-oneplus.component.css']
})
export class BOneplusComponent {

  users = [
    {id: 1, name: 'OnePlus 9R'},
    {id: 2, name: 'OnePlus Nord 2'},
    {id: 3, name: 'OnePlus Nord CE 5G'}
  ]

}
