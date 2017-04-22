/* tslint:disable:no-unused-variable */

import { TestBed, async, } from '@angular/core/testing';
import { MNComponent } from './makenumber.component';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

describe('Make Number test', () => {
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    TestBed.configureTestingModule({
      declarations: [MNComponent],
    });
    TestBed.compileComponents();
  });
  it('should open the page "Chọn các số hạng"', async(() =>{
      const fixture = TestBed.createComponent(MNComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
  }));
  it('should have as title "Chọn các số hạng"', async(() => {
      const fixture = TestBed.createComponent(MNComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual("Chọn các số hạng");
  }));
  it('should render title in a h3 tag', async(() => 
  {
    const fixture = TestBed.createComponent(MNComponent);
    const compiled = fixture.debugElement.nativeElement;
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('Chọn các số hạng');
  }));
  it('should be right answer when question is "0 3 8 9 1 10 4 7 5" with amount is "3", result is "8" and I choose "0 3 5"', async(() => {
    const fixture = TestBed.createComponent(MNComponent);
    const btn = fixture.debugElement.query(By.css('#play'));
    const choice0 = fixture.debugElement.query(By.css('#num0'));
    const choice1 = fixture.debugElement.query(By.css('#num1'));
    const choice2 = fixture.debugElement.query(By.css('#num2'));
    const choice3 = fixture.debugElement.query(By.css('#num3'));
    const choice4 = fixture.debugElement.query(By.css('#num4'));
    const choice5 = fixture.debugElement.query(By.css('#num5'));
    const choice6 = fixture.debugElement.query(By.css('#num6'));
    const choice7 = fixture.debugElement.query(By.css('#num7'));
    const choice8 = fixture.debugElement.query(By.css('#num8'));
    var app = fixture.debugElement.componentInstance;
    btn.triggerEventHandler('click', null);
    app.num = [0,3,8,9,1,10,4,7,5];
    app.amount = 3;
    app.result = 8;
    choice0.triggerEventHandler('click', null);
    choice1.triggerEventHandler('click', null);
    choice8.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(app.score).toEqual(3);
    expect(app.return).toEqual('Tốt lắm!');
  }));
  it('should be wrong answer when question is "0 3 8 9 1 10 4 7 5" with amount is "3", result is "8" and I choose "8 0 1"', async(() => {
    const fixture = TestBed.createComponent(MNComponent);
    const btn = fixture.debugElement.query(By.css('#play'));
    const choice0 = fixture.debugElement.query(By.css('#num0'));
    const choice1 = fixture.debugElement.query(By.css('#num1'));
    const choice2 = fixture.debugElement.query(By.css('#num2'));
    const choice3 = fixture.debugElement.query(By.css('#num3'));
    const choice4 = fixture.debugElement.query(By.css('#num4'));
    const choice5 = fixture.debugElement.query(By.css('#num5'));
    const choice6 = fixture.debugElement.query(By.css('#num6'));
    const choice7 = fixture.debugElement.query(By.css('#num7'));
    const choice8 = fixture.debugElement.query(By.css('#num8'));
    var app = fixture.debugElement.componentInstance;
    btn.triggerEventHandler('click', null);
    app.num = [0,3,8,9,1,10,4,7,5];
    app.amount = 3;
    app.result = 8;
    choice2.triggerEventHandler('click', null);
    choice0.triggerEventHandler('click', null);
    choice4.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(app.score).toEqual(0);
    expect(app.return).toEqual('KẾT THÚC');
  }));
});
