exports.config = {
    tests: './*_test.js',
    output: './output',
    helpers: {
        Puppeteer: {
            chrome: {args: ['--no-sandbox']},
            url: 'http://localhost',
            waitForNavigation: 'networkidle0',
            waitForAction: 500,
            show: true
        },
        GetUrl: {
            require: './geturl_helper.js'
        }
    },
    include: {
        I: './steps_file.js',
        'fakeStuff': './pages/fakestuff.js',
        'signUp': './pages/signUp.js',
        'onesecmail': './pages/1secmail.js'
    },
    bootstrap: null,
    mocha: {},
    name: 'CodeceptJsDemo'
};
