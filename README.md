# automation-demo
a VERY simple set of examples for Selenium and Protractor

Getting Started
---------------
You need to have installed the standalone Selenium Server, which will allow you to hook into elements rendered in the browser itself for testing.  You can find recent versions at [SeleniumHQ](http://www.seleniumhq.org/download/).

Hopefully you have Java installed, if not get it from [Oracle](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html) and make sure you've added it to your `PATH`.

Selenium's Webdriver is the biggest piece of what makes it work so well for testing web applications.  Find the drivers you need for individual browsers also at [SeleniumHQ](http://www.seleniumhq.org/projects/webdriver/).  Make sure these are on the `PATH` as well.

Make sure to install `selenium-webdriver`.
```
npm install -g selenium-webdriver
```
I like it all the time, so I gave it the global install.

Finally, start the server from the command-line and we're ready to run the tests
```
java -jar [the path & name of the selenium-stadalone.jar here]
```
Running the tests
-----------------
Right now I have Protractor set up to use Chrome, and Selenium set to use Firefox.  Tweak as you will!
### For Protractor
```
protractor conf.js
```
### For Selenium
```
node bareBonesSelenium.js
```
**Congratulations, you've run automated tests!**