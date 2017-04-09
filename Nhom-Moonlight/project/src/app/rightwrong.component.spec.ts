import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RWComponent } from './rightwrong.component';

describe('RightWrong test', ()  => {
    let comp: RWComponent;
    let fixture: ComponentFixture<RWComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RWComponent],
        });
        fixture = TestBed.createComponent(RWComponent);
        comp = fixture.componentInstance;
    });
    it('should have title "Đúng hay Sai', () => {
        expect(comp.title).toEqual('Đúng hay Sai');
    });
    it('should start the game', () => {
        const playBtn = fixture.debugElement.query(By.css('#play'));
        playBtn.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(comp.score).toEqual(0);
        expect(comp.on_play).toEqual(true);
    });
    it('should choose right button', () => {
        const playBtn = fixture.debugElement.query(By.css('#play'));
        playBtn.triggerEventHandler('click', null);
        const rightBtn = fixture.debugElement.query(By.css('#right'));
        rightBtn.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(comp.return).toEqual('Chuẩn rồi!' || 'Sai mất rôi!');
    });
     it('should choose wrong button', () => {
        const playBtn = fixture.debugElement.query(By.css('#play'));
        playBtn.triggerEventHandler('click', null);
        const rightBtn = fixture.debugElement.query(By.css('#wrong'));
        rightBtn.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(comp.return).toEqual('Chuẩn rồi!' || 'Sai mất rôi!');
    });
    it('should restart the game', () => {
        const playBtn = fixture.debugElement.query(By.css('#play'));
        playBtn.triggerEventHandler('click', null);
        const restartBtn = fixture.debugElement.query(By.css('#return'));
        restartBtn.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(comp.on_play).toEqual(true);
        expect(comp.score).toEqual(0);
    });
});