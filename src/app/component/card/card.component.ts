import {Component} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  posts = [
    {title: 'Sony PSP E1008', price: 2344,location: 'Севастополь, пл. Нахимова8',date: '12 августа в 13:06',img: 'assets/sony-psp.png'},
    {title: 'Sony PSP E1008', price: 2344,location: 'Севастополь, пл. Нахимова',date: '12 августа в 13:06',img: 'assets/sony-psp.png'},
    {title: 'Sony PSP E1008', price: 2344,location: 'Севастополь, пл. Нахимова',date: '12 августа в 13:06',img: 'assets/sony-psp.png'},
    {title: 'Sony PSP E1008', price: 2344,location: 'Севастополь, пл. Нахимова',date: '12 августа в 13:06',img: 'assets/sony-psp.png'},
    {title: 'Sony PSP E1008', price: 2344,location: 'Севастополь, пл. Нахимова',date: '12 августа в 13:06',img: 'assets/sony-psp.png'},
    {title: 'Sony PSP E1008', price: 2344,location: 'Севастополь, пл. Нахимова',date: '12 августа в 13:06',img: 'assets/sony-psp.png'},
  ]
}
