describe("Test login", function() {

  beforeEach(angular.mock.module('App'));

  it('should have a LoginCtrl controller', function() {
    expect(App.LoginCtrl).toBeDefined();
  });

  it('should have a working LoginService service', inject(['LoginService',
    function(LoginService) {
      expect(LoginService.isValidUsername).not.to.equal(null);

      // test cases - testing for success
      var validUsername = 'HL308';
      var validPassword = '308308';

      // test cases - testing for failure
      var invalidUsername ='HL309';
      var invalidPassword = '308309';
      //start testing
      //valid
        var valid = LoginService.isValidUsername(validUsername);
        expect(valid).toBeTruthy();
        var valid = LoginService.isValidPassword(validPassword);
        expect(valid).toBeTruthy();
        expect(browser().location().path()).toBe("/home");
      //invalid
        var valid = LoginService.isValidUsername(invalidUsername);
        expect(valid).toBeFalsy();
        var valid = LoginService.isValidPassword(invalidPassword);
        expect(valid).toBeFalsy();
        expect(browser().location().path()).toBe("/fail");
     }])
  );
});