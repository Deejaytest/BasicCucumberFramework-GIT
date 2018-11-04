Feature: Signup Functionality

Scenario Outline: Signup happening with correct details
Given User is on signup page
When Signup is done using "<FirstName>","<LastName>","<Address1>","<Address2>"
Then Signup is successfull

Examples:
|FirstName | LastName | Address1 | Address2 |
|Deepak    |Jindal    | a1		| a12	   |
|QC   	  |Jindal    | a21		| a22	   |
|Happy     |Testing   | a31		| a32	   |
