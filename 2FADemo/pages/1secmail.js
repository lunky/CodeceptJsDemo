const { I } = inject();

module.exports = {
    // insert your locators and methods here
    getLinkFromMail: async function(emailLoginNoDomain, signupDomain, subjectLine){
        I.amOnPage('https://www.1secmail.com/');
        I.fillField('#login', emailLoginNoDomain);
        I.selectOption('#domain', signupDomain);
        I.click('Check mail');
        I.waitForElement(`//a[contains(text(), '${subjectLine}')]`,90);
        I.clickLink(subjectLine);
        I.switchTo('#messageiframe');
        const url = await I.grabTextFrom('//div/a');
        I.say(`url=${url}`);
        return url;
    }
};
