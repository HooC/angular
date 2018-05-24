import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  timer: any;

  @Input() start = 0;
  @Input() interval = 1000;


  startTimer () {
    this.timer = setInterval(() => {
       this.start = Number(this.start) + 1;
    }, this.interval);
  }

  stopTimer () {
    clearInterval(this.timer);
  }
}
