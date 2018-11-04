package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
	
	@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "src/test/java/features/Hooks.feature",dryRun=false, strict=true, monochrome=true,
			glue= "stepDefinitions", tags="@RegressionTest",
			plugin= {"pretty", "html:target/cucumber", "json:target/cucumber/cucumber.json" , "junit:target/cucumber/cucumber.xml"})

	//To run only selected tests(Only smoke, only sanity, smoke/sanity etc.), tags should be used-
	/*@CucumberOptions(  
		    features = "src/test/java/features",
		    glue="stepDefinations",tags="@SmokeTest, @SanityTest")*/

// Try out other options too like
	/*dryRun = true/ false --> 
	monochrome = true/false
	strict = true/false
	*/


public class testRunnerTest {
}
