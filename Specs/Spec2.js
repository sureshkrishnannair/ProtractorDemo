describe('Verify Calculation Logic',function(){

    //Addition Method
    function    Calculation(firstKey,secondKey,calculationType){
        element(by.model('first')).sendKeys(firstKey);
        element(by.model('second')).sendKeys(secondKey);
     //   element(by.model('operator')).element(by.css("option[value='ADDITION']")).click();


    element.all(by.tagName('option')).each(function(Option){

    Option.getAttribute('value').then(function(value){

        if(value==calculationType){
            Option.click();
        }

    })
})
        element(by.id('gobutton')).click();
    }

    //Substraction method
    function    Substract(a,b,x){
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.model('operator')).element(by.css("option[value='"+x+"']")).click();  //Using Dynamic Locators
        element(by.id('gobutton')).click();
    }



    //Before Each block
        beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
      })

      //=======================================================Test cases Starts from Here========================================================================================

      it('addition',function(){

		Calculation(1,2,"ADDITION");
		element(by.css("h2[class='ng-binding']")).getText().then(function(x){
			console.log(x);
		})
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe('3');
		expect( element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText()).toBe('3');
	})
	
	it('substraction',function(){
	
        Substract(2,1,"SUBTRACTION");
		element(by.css("h2[class='ng-binding']")).getText().then(function(x){
			console.log(x);
		})
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe('1');
	
	
	})
	
	it('multiplication',function(){
	
		Calculation(2,2,"MULTIPLICATION");
		element(by.css("h2[class='ng-binding']")).getText().then(function(x){
			console.log(x);
		})
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe('4');
	
	
	})


      it('multipleRecords',function(){

   
        Calculation(2,2,"MULTIPLICATION");
        element(by.css("h2[class='ng-binding']")).getText().then(function(x){
            console.log(x);
        })
    
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe('4');
    
        Calculation(3,3,"MULTIPLICATION");
        element(by.css("h2[class='ng-binding']")).getText().then(function(x){
            console.log(x);
        })
       expect(element(by.css("h2[class='ng-binding']")).getText()).toBe('9');
    
        element.all(by.repeater('result in memory')).each(function(item){    
        item.element(by.css('td:nth-child(3)')).getText().then(function(text){
                console.log('-----'+text);
        })
    
        })
    
     
    })    
    })