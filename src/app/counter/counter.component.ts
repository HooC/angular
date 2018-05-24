import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {

  @Input() value = 0;

  @Input() step = 1;

  changeValue () {
    this.value = this.value + this.step;
  }
}
