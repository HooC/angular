import { Component } from '@angular/core';

const users = [
  {name: 'Name Card 1'},
  {name: 'Name Card 2'},
  {name: 'Name Card 3'},
  {name: 'Name Card 4'},
  {name: 'Name Card 5'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to Angular';

  users: Array<Object> = users;

  handler(value) {
    this.title = value.name;
  }
}
