import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-poco',
  templateUrl: './b-poco.component.html',
  styleUrls: ['./b-poco.component.css']
})
export class BPocoComponent {

  users = [
    {id: 1, name: 'Poco M4 Pro 5G'},
    {id: 2, name: 'Poco X3 GT'},
    {id: 3, name: 'Poco F3 GT'},
    {id: 4, name: 'Poco M3 Pro 5G'},
    {id: 5, name: 'Poco X3 Pro'}
  ]

}
