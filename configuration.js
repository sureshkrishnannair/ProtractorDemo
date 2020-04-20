var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
		
			capabilities: {
				  'browserName': 'chrome',
				  'chromeOptions': {
				      'args': ['incognito','--headless',"--disable-gpu",'--window-size=1920,1080'] //,'--headless','--window-size=1920,1080'
				  },
				  'goog:chromeOptions': {
					w3c: false
					}
				},
  restartBrowserBetweenTests: false,
  //SELENIUM_PROMISE_MANAGER: true,	
  framework: 'jasmine2',
  seleniumAddre4ss: 'http://localhost:4444/wd/hub',
  specs: ['./Specs/Spec1.js'],
  
   
  jasmineNodeOpts: {
    defaultTimeoutInterval: 50000
  },


  onPrepare: function () {
	  
	browser.driver.manage().window().maximize();
	browser.manage().deleteAllCookies();
	// Override the timeout for webdriver.
	browser.driver.manage().timeouts().implicitlyWait(10000);

	jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      );

		 
  }

};