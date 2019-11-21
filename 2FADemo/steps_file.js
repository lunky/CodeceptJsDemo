
// in this file you can append custom step methods to 'I' object

module.exports = function() {
    return actor({
    // Define custom steps here, use 'this' to access default methods of this\.
    // It is recommended to place a general 'login' function here.
        login: function(email ,password){
            this.seeInCurrentUrl('/app/#/login');
            this.fillField('Email', email);
            this.fillField('Password', password);
            this.clickLink("//button[@type='submit']");
            this.dontSee('Error! You provided an invalid email or password');
        },
        logInToGoogle: async function(youtubeEmail, youtubePassword){
            this.waitForVisible('#identifierNext',15);
            this.fillField('#identifierId', youtubeEmail);
            this.seeElement('#identifierNext');
            this.clickLink('#identifierNext');

            this.dontSee("For your protection, you can't sign in from this device.");
            this.waitForVisible('div#passwordNext',15);
            this.waitForVisible("//input[@name='password']",15);
            this.fillField("//input[@name='password']", youtubePassword);
            this.clickLink('#passwordNext');
            this.see("This app isn't verified");
            this.click('Advanced');
            this.clickLink('Go to Crowdscriber (unsafe)');
        },
        deleteInProgressTranscription: function(){
            this.retry(3).seeElement('div.dashboard-video-cell');
            this.moveCursorTo('div.dashboard-video-cell');
            this.seeElement("//a[contains(text(), 'Review')]",5);
            this.clickLink('Review');
            this.click('Delete');
            this.clickLink('OK');
            this.see('No Active Transcriptions'); // confirm there isn't a pending transcription
            this.click('.ui-pnotify-closer'); // hit the first one.. who cares..
        }
    });
};
