import { Selector, t } from 'testcafe'

class sidebarOptions{
    constructor(){
        this.inboxButton = Selector('#filter_inbox')
        this.todayButton = Selector('#filter_today')
        this.sectionName = Selector('.sidebar_expansion_panel')
        this.plusProjectIcon = Selector('button[aria-label="Add Project"]')
        this.projectLabel = Selector('li[data-type="project_list_item"]')
        this.favoriteProjectLabel = Selector('ul[aria-label="Favorites"]').find('li[data-type="project_list_item"]')
    }
}

export default new sidebarOptions()