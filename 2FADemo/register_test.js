let signupDomain, emailLogin, fakeName, fakeEmail, fakePassword; // define

BeforeSuite( async (fakeStuff, I) => {
    ({signupDomain, emailLogin, fakeName, fakeEmail, fakePassword} = fakeStuff.getFakeCreds());
    let url =await I.getConfiguredHostUrl();
    I.say(url);
});

Feature('Register');

Scenario('Create new account', (I, signUp) => {
    signUp.register(fakeName, fakeEmail, fakePassword, emailLogin, signupDomain);
});

Scenario('Finish Setup', async (I) => {
    I.amOnPage('/app#/login');
    I.login(fakeEmail, fakePassword);
    I.waitForText('No Active Transcriptions', 5);
});

Scenario('Create duplicate account', (I, signUp) => {
    // repeat test but expect account to already exist
    signUp.signUp(fakeName, fakeEmail, fakePassword, emailLogin, signupDomain);
    I.fillField('Password', fakePassword);
    I.click('Sign up'); // case senstive
    I.see('Unable to create account');
    I.see('Email already used.');
});
