import {Selector} from'testcafe'

class loginPage{
    constructor(){
        this.emailInput = Selector('#email')
        this.passwordIinput = Selector('#password')
        this.submitLoginButton = Selector('button[class="submit_btn"]')
    }
}