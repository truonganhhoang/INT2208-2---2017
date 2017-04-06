describe('testing online', function() {
  it('testing question 1', function() {
    var question = '1';
    var answer = 'B';
    question.selected(answer);
    expect(answer.selected).toBe(true);
    //B is correct answer of question 1
  });
});