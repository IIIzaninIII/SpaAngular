import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-zte',
  templateUrl: './a-zte.component.html',
  styleUrls: ['./a-zte.component.css']
})
export class AZteComponent {

  users = [
    {id: 1, name: 'ZTE Axon 31 Pro 5G'},
    {id: 2, name: 'ZTE Axon 30 Ultra'},
    {id: 3, name: 'ZTE Axon 30 5G'},
  ]

}
