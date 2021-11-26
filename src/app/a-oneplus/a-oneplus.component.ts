import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-oneplus',
  templateUrl: './a-oneplus.component.html',
  styleUrls: ['./a-oneplus.component.css']
})
export class AOneplusComponent {

  users = [
    {id: 1, name: 'OnePlus 9RT'},
    {id: 2, name: 'OnePlus 9 Pro'},
    {id: 3, name: 'OnePlus 9'}
  ]

}
