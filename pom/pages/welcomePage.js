import {Selector} from 'testcafe'

class  WelcomePage{
    constructor(){
        this.loginButton = Selector('a').withText("Log in")
    }
}

export default new WelcomePage()