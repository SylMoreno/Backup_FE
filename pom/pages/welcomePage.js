import {Selector} from 'testcafe'

class  welcomePage{
    constructor(){
        this.loginButton = Selector('a').withText("Log in")
    }
}