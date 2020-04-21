describe('Verify Login & Logout Functionality',function()
	{
	
	//TC1
	it('test Login Feature',function(){
		
        browser.get('https://angularjs.org');
		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model('first')).sendKeys(1);
   		element(by.model('second')).sendKeys(2);
		element(by.id('gobutton')).click().then(function(){

			expect(element(by.binding('latest')).getText()).
			toEqual('3');
		}).then(function(){
			browser.sleep(5000);
				
			})
		
		.then(function(){
		console.log('Asynchronous Script')
		console.log('Asynchronous Script')

		})
      
		
	})
	
	//TC2
	it('test logout feature',function(){
       
	
	})
	
	
	
	}) //Describe


	