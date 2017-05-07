import { Injectable } from '@angular/core';

import { Question } from './question';
import { QUESTIONS } from './mock-question';

@Injectable()
export class QuestionService {
  getQuestions(): Promise<Question[]> {
    return Promise.resolve(QUESTIONS);
  }

  // See the "Take it slow" appendix
  getQuestionsSlowly(): Promise<Question[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getQuestions()), 2000);
    });
  }
}