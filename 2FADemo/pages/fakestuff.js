// eslint-disable-next-line node/no-unpublished-require
const faker = require('faker');
const { I } = inject();
module.exports = {
    getFakeCreds(){
        let signupDomain, emailLogin, fakeName, fakeEmail, fakePassword; // define
        let seed = ((new Date().getTime() * 10000) + 621355968000000000); // ticks
        if ( process.env.SEED ){
            seed = Number(process.env.SEED);
        }
        faker.seed(seed);
        I.say(`Seed = ${seed}`);
        fakeName = faker.name.findName();
        fakePassword = faker.internet.password(10, 0) + '@A1a'; // ensure symbol/uppercase/lowercase/number
        I.say(`fake password ${fakePassword}`);

        signupDomain = '1secmail.com';
        emailLogin = faker.random.alphaNumeric(16);
        fakeEmail = `${emailLogin}@${signupDomain}`;
        I.say(`fake email ${fakeEmail}`);
        return {signupDomain, emailLogin, fakeName, fakeEmail, fakePassword };
    }
};
