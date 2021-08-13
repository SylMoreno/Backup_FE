import { Role } from 'testcafe'
import { URL, CREDENTIALS } from './Constants'
import LoginPage from '../pages/LoginPage'
import WelcomePage from '../pages/WelcomePage'

export const validUser = Role(`${URL.SUT_URL}`, async t => {
    await t.click(WelcomePage.loginButton)
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.MAIL, CREDENTIALS.VALID_USER.PASSWORD)
    await t.wait(7000)
}, {preserveUrl: true})