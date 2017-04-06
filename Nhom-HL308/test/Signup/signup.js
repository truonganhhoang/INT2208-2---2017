describe("Test signup", function() {

  beforeEach(angular.mock.module('App'));

  it('should have a SignupCtrl controller', function() {
    expect(App.SignupCtrl).toBeDefined();
  });

  it('should have a working SignupService service', inject(['SignupService',
    function(SignupService) {
      expect(SignupService.isValidEmail).not.to.equal(null);

      // test cases - testing for success
      var validEmails = 'hl308@gmail.com';
      var validUsername='HL308';
      var validPassword = '308308';
      var validConfirmPassword = '308308';

      // test cases - testing for failure
      var validEmails = 'hl308@gmail.com';
      var validUsername='HL308';
      var validPassword = '308308';
      var invalidConfirmPassword = '308309';
      //start testing
      //valid
        var valid = expect(validPassword).equal(validConfirmPassword);
        expect(valid).toBeTruthy();
        expect(browser().location().path()).toBe("/wellcome");
      //invalid
        var valid =  expect(validPassword).equal(invalidConfirmPassword);
         expect(valid).toBeFalsy();
        expect(browser().location().path()).toBe("/fail");
    }])
  );
});