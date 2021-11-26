import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-zte',
  templateUrl: './c-zte.component.html',
  styleUrls: ['./c-zte.component.css']
})
export class CZteComponent {

  users = [
    {id: 1, name: 'ZTE Blade A51'},
    {id: 2, name: 'ZTE Blade V30'},
    {id: 3, name: 'ZTE Blade V30 Vita'},
    {id: 4, name: 'ZTE Blade A31'},
    {id: 5, name: 'ZTE Blade A71'},
    {id: 6, name: 'ZTE Blade 11 Prime'},
    {id: 7, name: 'ZTE S30 SE'}
  ]

}
