describe('Protractor Basics Tutorial',function(){


    

    it('Loginfunction',function(){
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
       
        browser.get('http://qaclickacademy.com/practice.php');
        // element(by.id('confirmbtn')).click().then(function(){
        //     browser.sleep(5000);
        // });
        // browser.switchTo().alert().accept().then(function(){

        //     browser.sleep(5000);
        // })
        // element(by.id('autocomplete')).sendKeys('India').then(function(){

        //     browser.sleep(5000);
        // })

      browser.actions().mouseMove(element(by.id('autocomplete')).sendKeys('India')).perform().then(function(){

        browser.sleep(5000);
    })
      browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
      browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){

        browser.sleep(5000);
    })

    expect(element.all(by.css("input[type='checkbox']")).count()).toEqual(3);
    //element.all(by.css("input[type='checkbox']")).count()

    element.all(by.css("input[type='checkbox']")).get(0).click().then(function(){

        browser.sleep(5000);
    })

    //Switch Window

    // element(by.id('opentab')).click().then(function(){

    //     browser.sleep(5000);
    // })

    // browser.getAllWindowHandles().then(function(handles){

    //     browser.sleep(5000);
    //     browser.switchTo().window(handles[1]);

    //     browser.getTitle().then(function(title){
    //         console.log("Child title is"+title);        
    //     })

       
    // })

    // browser.getAllWindowHandles().then(function(handles){

    //     browser.sleep(5000);
    //     browser.switchTo().window(handles[1]);

    //     browser.getTitle().then(function(title){
    //         console.log("Parent title is"+title);        
    //     })


    // })




    //Iframe
    browser.switchTo().frame('iframe-name');
    element(by.css('a[href*=sign_in]')).getText().then(function(text){
        console.log('text is ====='+text)
        browser.sleep(5000);
    })



    })//It Block



})//Describe Block