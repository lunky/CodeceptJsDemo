const { I, onesecmail } = inject();

module.exports = {

    // insert your locators and methods here

    register: async function(name, email, password, emailLogin, signupDomain){
        this.signUp(name, email, password);
        I.waitForText('Thank you for registering with Crowdscriber!', 30);
        this.verifyEmail(emailLogin, signupDomain);
    },

    signUp: async function(name, email, password){
        I.amOnPage('/app/#/login');
        I.click('Sign Up'); // case sensitive
        I.see('Create your FREE account. No credit card required!');
        I.seeInCurrentUrl('/app/#/create-account');
        I.fillField('Name', name);
        I.fillField('Email', email);
        I.fillField('Password', password);
        I.click('Sign up'); // case senstive
    },

    verifyEmail: async function (emailLogin, signupDomain){
        const url = await onesecmail.getLinkFromMail(emailLogin,
            signupDomain,
            'Activate your Crowdscriber Account');
        I.amOnPage(url);
        I.see('Account Verified');
    },
    linkGoogleAccount: async function (fakeEmail, fakePassword, youtubeEmail, youtubePassword){
        I.amOnPage('/app/#/login');
        I.login(fakeEmail, fakePassword);
        I.see('My YouTube');
        I.click('My YouTube');
        I.waitForInvisible('.intercom-launcher-discovery-frame',5);
        I.switchTo();
        I.clickLink('Link Your Account');
        I.logInToGoogle(youtubeEmail, youtubePassword);
        I.clickLink('#submit_approve_access');
        I.seeInCurrentUrl('/app/#/manage-videos/active');
    },
    authorizeManageSubtitles: async function (fakeEmail, fakePassword, youtubeEmail, youtubePassword){
        I.amOnPage('/app/#/login');
        I.login(fakeEmail, fakePassword);
        I.waitForInvisible('.intercom-launcher-discovery-frame',5);
        I.click('.cs-nav-toggle');
        I.clickLink('profile');
        I.switchTo();
        I.click('Allow Updates');
        I.see('Yes, manage subtitles');
        I.click('//button[contains(., "Yes, manage subtitles")]');
        I.logInToGoogle(youtubeEmail, youtubePassword);
        I.clickLink('#submit_approve_access');
        I.seeInCurrentUrl('/app/#/manage-videos/active');
    }

};
