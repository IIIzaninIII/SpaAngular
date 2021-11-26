import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-huawei',
  templateUrl: './a-huawei.component.html',
  styleUrls: ['./a-huawei.component.css']
})
export class AHuaweiComponent {

  users = [
    {id: 1, name: 'Huawei P50'},
    {id: 2, name: 'Huawei P50 Pro'},
    {id: 3, name: 'Huawei Mate X2'},
    {id: 4, name: 'Huawei Mate 40 RS'},
    {id: 5, name: 'Huawei Mate 40 Pro 4G'},
    {id: 6, name: 'Huawei Mate 40 Pro+'}
  ]

}
