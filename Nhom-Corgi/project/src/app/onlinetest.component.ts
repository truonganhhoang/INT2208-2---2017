import { Component } from '@angular/core';

@Component({
    selector:'my-exam',
    templateUrl:'onlinetest.component.html'
})
export class OnlineTestComponent{
    correctAnswerCount = 0;
    show = false;
    
    public clickAnswer() {
        this.correctAnswerCount += 1;
    }   
    public clickSubmit() {
        this.show = true;
    }
}  