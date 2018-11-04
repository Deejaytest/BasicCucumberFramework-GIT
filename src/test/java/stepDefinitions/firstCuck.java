package stepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;

import java.util.List;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class firstCuck {
	
	//Step Definition code for Background Keyword in feature file
	 /*@Given("^validate the browser$")
	  public void validate_the_browser() throws Throwable {
		  System.out.println("deciding the browser to open");
	  }

	  @When("^Browser is triggered$")
	  public void browser_is_triggered() throws Throwable {
		  System.out.println("Browser is triggered");
	  }

	  @Then("^check if browser is started$")
	  public void check_if_browser_is_started() throws Throwable {
		  System.out.println("Browser is started");
	  }
*/
    /*@Given("^User is on home page$")
    public void user_is_on_home_page() throws Throwable {
    	System.out.println("1");
    }

    @When("^Click on Dependencies$")
    public void click_on_dependencies() throws Throwable {
    	System.out.println("2");

    }

    @Then("^User is taken to the dependencies screen$")
    public void user_is_taken_to_the_dependencies_screen() throws Throwable {
    	System.out.println("3"); 

    } */
	

	
	//Code using Regular expression
	@Given("^User is on login page$")
    public void user_is_on_login_page() throws Throwable {
    	System.out.println("On Login Page"); 

    }

    @When("^User enters username \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void user_enters_username_something_and_password_something(String username, String password) throws Throwable {
    	System.out.println(username); 
    	System.out.println(password); 
    }

    @Then("^Login is \"([^\"]*)\"$")
    public void login_is_something(String landingpageDisplayed) throws Throwable {
    
    	System.out.println(landingpageDisplayed); 

    } 
	
	//Data driven case- to be used when data is large
	/*@Given("^User is on signup page$")
    public void user_is_on_signup_page() throws Throwable {
    }

    @When("^Following details are entered$")
    public void following_details_are_entered(DataTable data) throws Throwable {
    	List<List<String>> obj = data.raw();
    	System.out.println(obj.get(0).get(0));
    	System.out.println(obj.get(0).get(1));
    	System.out.println(obj.get(0).get(2));
    	System.out.println(obj.get(0).get(3));
    }

    @Then("^Signup is successfull$")
    public void signup_is_successfull() throws Throwable {
    } */

	//Paramterization code
    @Given("^User is on signup page$")
    public void user_is_on_signup_page() throws Throwable {
		System.out.println("On signup Page");
    }

    @When("^Signup is done using \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void signup_is_done_using(String firstname, String lastname, String address1, String address2) throws Throwable {
		System.out.println(firstname);
		System.out.println(lastname);
		System.out.println(address1);
		System.out.println(address2);
    
    }

    @Then("^Signup is successfull$")
    public void signup_is_successfull() throws Throwable {
		System.out.println("Success");

    } 
    


}