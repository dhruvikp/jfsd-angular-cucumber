const {Given, When, Then} = require('cucumber');
const { constants } = require('karma');
const { browser, element, By, by } = require('protractor');

Given('the user is on the login page', async function() {
    await browser.get('/login')
});

When('the user enters valid credentials', async function() {
    await element(by.name('username')).sendKeys('admin');
    await element(by.name('password')).sendKeys('admin');
});

When('the user clicks on the login button', async function() {
    await element(by.buttonText('Login')).click();
});

Then('the user should be redirected to home page', async function() {
    const currentUrl  = await browser.getCurrentUrl();
    expect(currentUrl).toEqual('/home');
});