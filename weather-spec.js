describe('Wolfram Alpha Protractor Demo', function () {
    var searchBar = element(by.name('search'));

    beforeEach(function () {
        browser.get('http://www.weather.com');
        
    });

    it('should have the expected title', function () {
        expect(browser.getTitle()).toEqual('National and Local Weather Forecast, Hurricane, Radar and Report');
    });

    it('should show possible answers', function(){
        searchBar.sendKeys('Provo');
        browser.sleep(100);
        var results = element.all(by.repeater('item in results')).getText();
        expect(results).toContain('Provo, UT');
        expect(results).toContain('Provoz, Kralovehradecky Kraj, Czech Republic');
    });

    it('should navigate to weather reports', function(){
        searchBar.sendKeys('Provo, UT');
        searchBar.sendKeys(protractor.Key.ENTER);
        browser.ignoreSynchronization = true;
        expect(browser.getTitle()).toEqual('Provo, UT Weather Forecast and Conditions - The Weather Channel | Weather.com');
        expect(browser.getCurrentUrl()).toEqual('https://weather.com/weather/today/l/USUT0208:1:US');
        browser.ignoreSynchronization = false;
    });

})