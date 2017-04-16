import { Component } from '@angular/core';
import { Question } from './question';
import { QuestionService } from './question.service';

@Component({
  selector: 'my-app',
  template: `
    <my-menu></my-menu>
    <router-outlet></router-outlet>
    <my-footer></my-footer>
  `,
  providers: [ QuestionService],
})
export class AppComponent  { 
  title = 'Đề thi Vật Lý';
}
