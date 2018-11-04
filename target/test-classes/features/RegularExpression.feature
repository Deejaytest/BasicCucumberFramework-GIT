Feature: Login Functionality

Scenario: Login happening with correct username and password
Given User is on login page
When User enters username "Deepak" and password "Jindal"
Then Login is "true"

Scenario: Login is not happening with incorrect username and incorrect password
Given User is on login page
When User enters username "Deejay" and password "Testing"
Then Login is "false"




