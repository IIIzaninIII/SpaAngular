import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-zte',
  templateUrl: './b-zte.component.html',
  styleUrls: ['./b-zte.component.css']
})
export class BZteComponent {

  users = [
    {id: 1, name: 'ZTE Axon 31 5G'},
    {id: 2, name: 'ZTE Blade X1 5G'},
    {id: 3, name: 'ZTE S30 Pro'}
  ]

}
