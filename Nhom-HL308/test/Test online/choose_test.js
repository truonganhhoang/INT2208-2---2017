describe('choose testing online', function() {
  it('choose test 1', function() {
    var number_of_test = '1';
    ctrl.selected(number_of_test);
    expect(number_of_test.selected).toBe(true);
    //user choose test 1
  });
});