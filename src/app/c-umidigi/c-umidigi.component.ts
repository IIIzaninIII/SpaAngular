import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-umidigi',
  templateUrl: './c-umidigi.component.html',
  styleUrls: ['./c-umidigi.component.css']
})
export class CUmidigiComponent {

  users = [
    {id: 1, name: 'UMiDIGI A9'},
    {id: 2, name: 'UMiDIGI Bison GT'},
    {id: 3, name: 'UMiDIGI A11'},
    {id: 4, name: 'UMiDIGI Power 5'},
    {id: 5, name: 'UMiDIGI Bison X10'},
    {id: 6, name: 'UMiDIGI Bison X10 Pro'},
    {id: 7, name: 'UMiDIGI A11 Pro Max'},
    {id: 8, name: 'UMiDIGI Bison Pro'}
  ]

}
