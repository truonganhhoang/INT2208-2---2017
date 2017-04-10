import { Component, NgModule } from '@angular/core';

// Pomodoro timer component
@Component({
  selector: 'my-ticktac',
  template: `
      {{ minutes }}:{{ seconds | number: '2.0' }}/30
`
})
export class PomodoroTimerComponent {
  minutes: number;
  seconds: number;
  isPaused: boolean;
  buttonLabel: string;

  constructor() {
    this.resetPomodoro();
    setInterval(() => this.tick(), 1000);
  }

  resetPomodoro(): void {

    this.seconds = 30;

  }

  private tick(): void {
    if (!this.isPaused) {
      this.buttonLabel = 'Pause';

      if (--this.seconds < 0) {

          this.resetPomodoro();
        }
      }
    }
  }

