Feature : Login Action
	
	In order to post and see photos of people
	As an user
	I want to login
 
		Background:
			Given:An User has an accounts with username and password
			And  database has username: nguyentienviet password: 123456 of this user

		Scenario: Successful Login with Valid Credentials
			Given User is on Login Page
			When User Navigate to LogIn Form
			And User enters UserName and Password are matched with database
			And Click on "LOGIN" button
			Then message displayed login succesfully
		 
		Scenario: Fail to login
			Given User is on Login Page
			When User Navigate to LogIn Form
			And User enters UserName and Password are not matched with database
			And Click on "LOGIN" button
			Then message displayed login failed

		Scenario: Successful LogOut
			Given user is at homepage
			When user want to logout
			And uer click "logout" button
			Then message displayed logout succesfully