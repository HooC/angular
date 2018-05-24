import { Component, OnInit } from '@angular/core';
const users = [
  {name: 'Name Card 1'},
  {name: 'Name Card 2'},
  {name: 'Name Card 3'},
  {name: 'Name Card 4'},
  {name: 'Name Card 5'}
];

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  title = 'Title projects';

  constructor() { }

  users: Array<Object> = users;

  handler(value) {
    this.title = value.name;
  }

  ngOnInit() {
  }

}
