import { Selector, t } from 'testcafe'

class basePage {
    constructor(){
        //Left Menu options
        this.inboxButton = Selector('#filter_inbox')
        this.todayButton = Selector('#filter_today')
        this.upcomingButton = Selector('#filter_upcoming')
        //Projects items
        this.sectionName = Selector('.sidebar_expansion_panel')
        this.plusProjectIcon = Selector('button[aria-label="Add Project"]')
        this.projectLabel = Selector('li[data-type="project_list_item"]')
        this.favoriteProjectLabel = Selector('ul[aria-label="Favorites"]').find('li[data-type="project_list_item"]')
        //Projects modals items
        this.projectName = Selector('input[id="edit_project_modal_field_name"]')
        this.colorList = Selector('div[class="form_field"]').find('button')
        this.selectedColorLabel = Selector('span[class="color_dropdown_select__name"]')
        this.favoriteToggle = Selector('.reactist_switch')
        this.addProjectButton = Selector('button[class="ist_button ist_button_red"]').withText("Add")
    }

    async createNewProject(PROJECT_NAME, PROJECT_COLOR, isFavorite=false){
        await t
        .hover(this.sectionName)
        .click(this.plusProjectIcon)
        .typeText(this.projectName, PROJECT_NAME, {paste: true})
        .click(this.colorList)
        .click(this.selectedColorLabel.withText(PROJECT_COLOR))
        if(isFavorite == true){
            await t.click(this.favoriteToggle)
        }
        await t.click(this.addProjectButton)
    }
}

export default new basePage()