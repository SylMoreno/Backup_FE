import { Role } from 'testcafe'
import { URL, CREDENTIALS } from './Constants'
import loginPage from '../pages/loginPage'
import welcomePage from '../pages/welcomePage'

export const validUser = Role(`${URL.SUT_URL}`, async t=>{
    await t.click(welcomePage.loginButton)
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.MAIL, CREDENTIALS.VALID_USER.PASSWORD)
    await t.wait(7000)
}, {preserveUrl: true})