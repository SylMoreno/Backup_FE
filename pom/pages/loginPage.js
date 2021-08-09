import {Selector, t} from'testcafe'
import { CREDENTIALS, ERROR_MESSAGE } from '../data/Constants'

class loginPage{
    constructor(){
        this.emailInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.submitLoginButton = Selector('.submit_btn')
        this.errorMessage = Selector('.error_msg')
    }

    async submitLoginForm(username, password){
        if(username != null){
            await t.typeText(this.emailInput, username, {paste: true})
        }
        if(password != null){
            await t.typeText(this.passwordInput, password, {paste: true})
        }
        await t.click(this.submitLoginButton)
    }
}

export default new loginPage()