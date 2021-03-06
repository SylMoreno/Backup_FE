import {URL, CREDENTIALS, ERROR_MESSAGE} from '../data/Constants' 
import WelcomePage from '../pages/WelcomePage'
import loginPage from '../pages/LoginPage'
import todayPage from '../pages/TodayPage'

fixture('Login feature test')
.page`${URL.SUT_URL}`
.beforeEach(async t => {
    await t.click(WelcomePage.loginButton)
})

test.only.meta('type', 'smoke')("As a user, I should be able to log in successfully using valid credentials", async t => {
    
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.MAIL, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(todayPage.headerTitle.exists).ok()
})

test("As a valid user, I should not be able to log if I am not providing credentials", async t => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_USER.NULL_FIELD, CREDENTIALS.INVALID_USER.NULL_FIELD)
    await t.expect(loginPage.errorMessage.innerText).contains(ERROR_MESSAGE.INVALID_EMAIL)
})

test.meta('type', 'smoke')("As a valid user, I should not be able to log using a wrong password", async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.MAIL, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(loginPage.errorMessage.innerText).contains(ERROR_MESSAGE.WRONG_CREDENTIALS)
})

test("As a valid user, I should not be able to log without typing a password", async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.MAIL, null)
    await t.expect(loginPage.errorMessage.innerText).contains(ERROR_MESSAGE.MISSING_PASSWORD)
})