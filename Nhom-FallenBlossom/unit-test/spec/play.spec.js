﻿describe("Chơi trò chơi", function () {

  beforeEach(angular.mock.module("myapp"));

  var  controller, 
       $controller,
       mockScope;

  beforeEach(angular.mock.inject(function(_$controller_, $rootScope){
    mockScope = $rootScope.$new();
    $controller = _$controller_;
    controller = $controller('myController', { $scope: mockScope });
  }));

  it('Hiển thị câu hỏi là : "5 + 6 = ??" và đáp án lần lượt là : 8, 10,11, 12', function () {
	  
            mockScope.questions = "5 + 6 = ??";
            mockScope.results = ['8', '10', '11', '12'];
            ( < HTMLInputElement > document.getElementById("n0")).style.display = "inline-block";
            ( < HTMLInputElement > document.getElementById("n1")).style.display = "inline-block";
            ( < HTMLInputElement > document.getElementById("n2")).style.display = "inline-block";
            ( < HTMLInputElement > document.getElementById("n3")).style.display = "inline-block";
            fixture.detectChanges();
            expect(mockScope.questions).toEqual('11 + 22 = ??');
            expect(mockScope.results).toEqual(['8', '10', '11', '12']);
  });
       it('tôi chọn đáp án: "11"', function () {
            const fixture = TestBed.createController(myController);
            const mockScope = fixture.debugElement.controllerInstance;

            mockScope.questions = "11 + 22 = ??";
            mockScope.results = ['8', '10', '11', '12'];
            mockScope.result = "11";
            ( < HTMLInputElement > document.getElementById("n0")).style.display = "inline-block";
            ( < HTMLInputElement > document.getElementById("n1")).style.display = "inline-block";
            ( < HTMLInputElement > document.getElementById("n2")).style.display = "inline-block";
            ( < HTMLInputElement > document.getElementById("n3")).style.display = "inline-block";
            fixture.detectChanges();
            ( < HTMLInputElement > document.getElementById("n2")).checked = true;
            expect(( < HTMLInputElement > document.getElementById("n2")).checked).toEqual(true);
         }));

         it('tôi nhận được kết quả thông báo là: "Chính xác !" và số câu đúng của tôi tăng lên 1', async(() => {
               const fixture = TestBed.createController(myController);
               const mockScope = fixture.debugElement.controllerInstance;
			   
               mockScope.questions = "5 + 6 = ??";
               mockScope.results = ['8', '10', '11', '12'];
               mockScope.result = "11";
               ( < HTMLInputElement > document.getElementById("n0")).style.display = "inline-block";
               ( < HTMLInputElement > document.getElementById("n1")).style.display = "inline-block";
               ( < HTMLInputElement > document.getElementById("n2")).style.display = "inline-block";
               ( < HTMLInputElement > document.getElementById("n3")).style.display = "inline-block";
               ( < HTMLInputElement > document.getElementById("n3")).checked = true;
               const choice = fixture.debugElement.query(By.css('#n2'));
               choice.triggerEventHandler('click', null);
               fixture.detectChanges();
               expect(mockScope.notify).toEqual('Chính xác!');
                  expect(mockScope.correct).toEqual(1);
               }));
	  
    it('tôi chọn đáp án: "12"', function () {
               const fixture = TestBed.createController(myController);
               const mockScope = fixture.debugElement.controllerInstance;
               mockScope.questions = "5 + 6 = ??";
               mockScope.results = ['8', '10', '11', '12'];
               ( < HTMLInputElement > document.getElementById("n0")).style.display = "inline-block";
               ( < HTMLInputElement > document.getElementById("n1")).style.display = "inline-block";
               ( < HTMLInputElement > document.getElementById("n2")).style.display = "inline-block";
               ( < HTMLInputElement > document.getElementById("n3")).style.display = "inline-block";
               fixture.detectChanges();
               ( < HTMLInputElement > document.getElementById("n3")).checked = true;
               expect(( < HTMLInputElement > document.getElementById("n3")).checked).toEqual(true);
            }));

         it('tôi nhận được kết quả thông báo là: "Sai rồi!" và số câu sai của tôi tăng lên 1 ', async(() => {
               const fixture = TestBed.createController(myController);
               const mockScope = fixture.debugElement.controllerInstance;
               mockScope.questions = "5 + 6 = ??";
               mockScope.results = ['8', '10', '11', '12'];
               ( < HTMLInputElement > document.getElementById("n0")).style.display = "inline-block";
               ( < HTMLInputElement > document.getElementById("n1")).style.display = "inline-block";
               ( < HTMLInputElement > document.getElementById("n2")).style.display = "inline-block";
               ( < HTMLInputElement > document.getElementById("n3")).style.display = "inline-block";
               ( < HTMLInputElement > document.getElementById("n2")).checked = true;
               const choice = fixture.debugElement.query(By.css('#n3'));
               choice.triggerEventHandler('click', null);
               fixture.detectChanges();
               expect(mockScope.notify).toEqual('Sai rồi! ');
			   expect(mockScope.incorrect).toEqual(1);
            }));			   
});

