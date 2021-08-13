import {URL, CREDENTIALS, ERROR_MESSAGE} from '../data/Constants' 
import WelcomePage from '../pages/WelcomePage'
import LoginPage from '../pages/LoginPage'
import TodayPage from '../pages/TodayPage'

fixture('Login feature test')
.page`${URL.SUT_URL}`
.beforeEach(async t => {
    await t.click(WelcomePage.loginButton)
})

test.meta('type', 'smoke')("As a user, I should be able to log in successfully using valid credentials", async t => {
    
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.MAIL, CREDENTIALS.VALID_USER.PASSWORD)
    await t.wait(5000)
    .expect(TodayPage.headerTitle.exists).ok()
})

test("As a valid user, I should not be able to log if I am not providing credentials", async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.NULL_FIELD, CREDENTIALS.INVALID_USER.NULL_FIELD)
    await t.expect(LoginPage.errorMessage.innerText).contains(ERROR_MESSAGE.INVALID_EMAIL)
})

test.meta('type', 'smoke')("As a valid user, I should not be able to log using a wrong password", async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.MAIL, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(LoginPage.errorMessage.innerText).contains(ERROR_MESSAGE.WRONG_CREDENTIALS)
})

test("As a valid user, I should not be able to log without typing a password", async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.MAIL, null)
    await t.expect(LoginPage.errorMessage.innerText).contains(ERROR_MESSAGE.MISSING_PASSWORD)
})