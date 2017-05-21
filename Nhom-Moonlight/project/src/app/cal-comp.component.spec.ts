/* tslint:disable:no-unused-variable */

import { TestBed, async, } from '@angular/core/testing';
import { CCComponent } from './cal-comp.component';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

describe('Calculate Compare test', () => {
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    TestBed.configureTestingModule({
      declarations: [
        CCComponent
      ],
    });
    TestBed.compileComponents();
  });
  it('should open the page "So sánh phép tính"', async(() => {
    const fixture = TestBed.createComponent(CCComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title "So sánh phép tính"`, async(() => {
    const fixture = TestBed.createComponent(CCComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('So sánh phép tính');
  }));
  it('should render title in a h3 tag', async(() => {
    const fixture = TestBed.createComponent(CCComponent);
    const compiled = fixture.debugElement.nativeElement;
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('So sánh phép tính');
  }));
  it('should be right answer when question is "9x1 ? 8x2" and I choose "<"', async() =>{
    const fixture = TestBed.createComponent(CCComponent);
    const app = fixture.debugElement.componentInstance;
    const btn = fixture.debugElement.query(By.css('#play'));
    const choiceSmaller = fixture.debugElement.query(By.css('#smaller'));
    btn.triggerEventHandler('click', null);
    app.num1 = 9;
    app.num2 = 1;
    app.num3 = 8;
    app.num4 = 2;
    app.sign_chooser = 2;
    app.result1 = 9*1;
    app.result2 = 8*2;
    choiceSmaller.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(app.return).toEqual('Đúng rồi!');
    expect(app.score).toEqual(1);
  });
  it('should be wrong answer when question is "9x1 ? 8x2" and I choose "="', async() =>{
    const fixture = TestBed.createComponent(CCComponent);
    const app = fixture.debugElement.componentInstance;
    const btn = fixture.debugElement.query(By.css('#play'));
    const choiceEqual = fixture.debugElement.query(By.css('#equal'));
    btn.triggerEventHandler('click', null);
    app.num1 = 9;
    app.num2 = 1;
    app.num3 = 8;
    app.num4 = 2;
    app.sign_chooser = 2;
    app.cal1 = 9*1;
    app.cal2 = 8*2;
    app.result1 = 9*1;
    app.result2 = 8*2;
    choiceEqual.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(app.return).toEqual('Bạn chọn "="');
    expect(app.score).toEqual(0);
    expect(app.cal1).toEqual('9 (9)');
    expect(app.cal2).toEqual('16 (16)');
  });
});