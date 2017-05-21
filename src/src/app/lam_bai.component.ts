import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { Question } from './question';
@Component ({
    selector: 'my-lam_bai',
    templateUrl: './lam_bai.component.html',
    providers: [QuestionService],
})
export class Lam_BaiComponent implements OnInit {
    questions: Question[] = [];
    constructor(private questionService: QuestionService) { }

  getQuestions(): void {
    this.questionService.getQuestions().then(questions => this.questions = questions);
  }

  ngOnInit(): void {
    this.getQuestions();
  }
}