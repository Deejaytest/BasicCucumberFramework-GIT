Feature: Login Functionality


@SmokeTest
Scenario: Login happening with correct username and password
Given User is on login page
When User enters username "Deepak" and password "Jindal"
Then Login is "true"

@RegressionTest
Scenario: Login is not happening with incorrect username and incorrect password
Given User is on login page
When User enters username "Deejay" and password "Testing"
Then Login is "false"

@RegressionTest
Scenario Outline: Signup happening with correct details
Given User is on signup page
When Signup is done using "<FirstName>","<LastName>","<Address1>","<Address2>"
Then Signup is successfull

Examples:
|FirstName | LastName | Address1 | Address2 |
|Deepak    |Jindal    | a1		| a12	   |
|QC   	  |Jindal    | a21		| a22	   |
|Happy     |Testing   | a31		| a32	   |

