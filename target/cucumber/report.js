$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 709049,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login is not happening with incorrect username and incorrect password",
  "description": "",
  "id": "login-functionality;login-is-not-happening-with-incorrect-username-and-incorrect-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters username \"Deejay\" and password \"Testing\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Login is \"false\"",
  "keyword": "Then "
});
formatter.match({
  "location": "firstCuck.user_is_on_login_page()"
});
formatter.result({
  "duration": 277965875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deejay",
      "offset": 22
    },
    {
      "val": "Testing",
      "offset": 44
    }
  ],
  "location": "firstCuck.user_enters_username_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 4241041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 10
    }
  ],
  "location": "firstCuck.login_is_something(String)"
});
formatter.result({
  "duration": 279685,
  "status": "passed"
});
formatter.after({
  "duration": 172344,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Signup happening with correct details",
  "description": "",
  "id": "login-functionality;signup-happening-with-correct-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User is on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Signup is done using \"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cAddress1\u003e\",\"\u003cAddress2\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Signup is successfull",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "login-functionality;signup-happening-with-correct-details;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Address1",
        "Address2"
      ],
      "line": 23,
      "id": "login-functionality;signup-happening-with-correct-details;;1"
    },
    {
      "cells": [
        "Deepak",
        "Jindal",
        "a1",
        "a12"
      ],
      "line": 24,
      "id": "login-functionality;signup-happening-with-correct-details;;2"
    },
    {
      "cells": [
        "QC",
        "Jindal",
        "a21",
        "a22"
      ],
      "line": 25,
      "id": "login-functionality;signup-happening-with-correct-details;;3"
    },
    {
      "cells": [
        "Happy",
        "Testing",
        "a31",
        "a32"
      ],
      "line": 26,
      "id": "login-functionality;signup-happening-with-correct-details;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 87669,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Signup happening with correct details",
  "description": "",
  "id": "login-functionality;signup-happening-with-correct-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User is on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Signup is done using \"Deepak\",\"Jindal\",\"a1\",\"a12\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Signup is successfull",
  "keyword": "Then "
});
formatter.match({
  "location": "firstCuck.user_is_on_signup_page()"
});
formatter.result({
  "duration": 103064,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deepak",
      "offset": 22
    },
    {
      "val": "Jindal",
      "offset": 31
    },
    {
      "val": "a1",
      "offset": 40
    },
    {
      "val": "a12",
      "offset": 45
    }
  ],
  "location": "firstCuck.signup_is_done_using(String,String,String,String)"
});
formatter.result({
  "duration": 542265,
  "status": "passed"
});
formatter.match({
  "location": "firstCuck.signup_is_successfull()"
});
formatter.result({
  "duration": 217676,
  "status": "passed"
});
formatter.after({
  "duration": 142408,
  "status": "passed"
});
formatter.before({
  "duration": 186457,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Signup happening with correct details",
  "description": "",
  "id": "login-functionality;signup-happening-with-correct-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User is on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Signup is done using \"QC\",\"Jindal\",\"a21\",\"a22\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Signup is successfull",
  "keyword": "Then "
});
formatter.match({
  "location": "firstCuck.user_is_on_signup_page()"
});
formatter.result({
  "duration": 67141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QC",
      "offset": 22
    },
    {
      "val": "Jindal",
      "offset": 27
    },
    {
      "val": "a21",
      "offset": 36
    },
    {
      "val": "a22",
      "offset": 42
    }
  ],
  "location": "firstCuck.signup_is_done_using(String,String,String,String)"
});
formatter.result({
  "duration": 226657,
  "status": "passed"
});
formatter.match({
  "location": "firstCuck.signup_is_successfull()"
});
formatter.result({
  "duration": 69280,
  "status": "passed"
});
formatter.after({
  "duration": 69707,
  "status": "passed"
});
formatter.before({
  "duration": 1785881,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Signup happening with correct details",
  "description": "",
  "id": "login-functionality;signup-happening-with-correct-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User is on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Signup is done using \"Happy\",\"Testing\",\"a31\",\"a32\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Signup is successfull",
  "keyword": "Then "
});
formatter.match({
  "location": "firstCuck.user_is_on_signup_page()"
});
formatter.result({
  "duration": 70135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Happy",
      "offset": 22
    },
    {
      "val": "Testing",
      "offset": 30
    },
    {
      "val": "a31",
      "offset": 40
    },
    {
      "val": "a32",
      "offset": 46
    }
  ],
  "location": "firstCuck.signup_is_done_using(String,String,String,String)"
});
formatter.result({
  "duration": 591445,
  "status": "passed"
});
formatter.match({
  "location": "firstCuck.signup_is_successfull()"
});
formatter.result({
  "duration": 192872,
  "status": "passed"
});
formatter.after({
  "duration": 69707,
  "status": "passed"
});
});