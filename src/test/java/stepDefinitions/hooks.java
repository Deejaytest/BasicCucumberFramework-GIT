package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hooks {
	
	@Before("@RegressionTest")
	public void BeforeRegressionHook()
	{
		System.out.println("Before regression Test Hook function");
	}
	
	@After("@RegressionTest")
	public void AfterRegressionHook()
	{
		System.out.println("After regression Test Hook function");
	}

}
