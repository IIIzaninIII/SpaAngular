import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-cubot',
  templateUrl: './c-cubot.component.html',
  styleUrls: ['./c-cubot.component.css']
})
export class CCubotComponent {

  users = [
    {id: 1, name: 'Cubot KingKong 7'},
    {id: 2, name: 'Cubot Max 3'},
    {id: 3, name: 'Cubot Note 9'},
    {id: 4, name: 'Cubot C20'},
    {id: 5, name: 'Cubot KingKong 5 Pro'},
    {id: 6, name: 'Cubot X50'}
  ]

}
