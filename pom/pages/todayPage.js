import {Selector} from 'testcafe'

class todayPage{
    constructor(){
        this.addQuickTaskButton = Selector('#quick_add_task_holder')
        this.headerTitle = Selector('header[data-testid="view_header"]')
    }
}

export default new todayPage()