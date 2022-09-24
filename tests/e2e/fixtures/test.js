import { Selector , t } from 'testcafe';
fixture`My First Test with config`
    .page;

// Note Page object Pattern is not implemented to perform DRY

const usernameSelector = Selector('#user-name')
const passwordSelector = Selector('#password')
const loginButtonSelector = Selector('#login-button')
const appLogoSelector = Selector('.app_logo')
const loginErrorMessageSelector = Selector('.error-message-container > h3')

test('Login with valid credential to saucedemo should browse us to home page' , async t => {
    // fill username
    await t.typeText(usernameSelector, "standard_user")

    // using debug tools
    // await t.debug();
    // await t.setNativeDialogHandler(() => true)
    // fill password
    await t.typeText(passwordSelector, "secret_sauce")
    // click login button
    await t.click(loginButtonSelector)
    // check if the user has browsed to login page
    await t.expect(appLogoSelector.exists).ok();
})


test('Login with invalid credential to saucedemo should give error' , async t => {
    // fill username
    await t.typeText(usernameSelector, "invalid")
    // fill password
    await t.typeText(passwordSelector, "invalid")
    // click login button
    await t.click(loginButtonSelector)
    // invalid credentials should give login message error
    const expectedErrorMessage = 'Epic sadface: Username and password do not match any user in this service'
    // assertion
    const actualErrorMessage = await loginErrorMessageSelector.innerText;
    await t.expect(expectedErrorMessage).eql(actualErrorMessage);
})

