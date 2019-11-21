
Feature('Google');

Scenario('test something', (I) => {
  I.amOnPage("/")
  I.see("Google")
  I.fillField("Search", "FullStack MB")
  I.click("Google Search")
  I.see("Full Stack MB")
  I.click("Full Stack MB")
  I.see("lambdas")
  I.dontSee("lambdaz")
  I.click("Events")
});
