import { Selector, t } from 'testcafe'

class sidebarOptions{
    constructor(){
        this.inboxButton = Selector('#filter_inbox')
        this.todayButton = Selector('#filter_today')
        this.sectionName = Selector('sidebar_expansion_panel expansion_panel')
        this.plusProjectIcon = Selector('button[aria-label="Add Project"]')
        this.projectLabel = Selector('.item_table')
    }
}

export default new sidebarOptions()