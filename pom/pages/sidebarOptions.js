import { Selector, t } from 'testcafe'

class sidebarOptions{
    constructor(){
        this.inboxButton = Selector('#filter_inbox')
        this.todayButton = Selector('#filter_today')
    }
}

export default new sidebarOptions()