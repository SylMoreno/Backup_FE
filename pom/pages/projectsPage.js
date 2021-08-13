import { Selector, t } from 'testcafe'
import sidebarOptions from './sidebarOptions'

class projectsPage{
    constructor(){
        //Project's creation
        this.projectName = Selector('input[id="edit_project_modal_field_name"]')
        this.colorList = Selector('div[class="form_field"]').find('button')
        this.selectedColorLabel = Selector('span[class="color_dropdown_select__name"]')
        this.favoriteToggle = Selector('.reactist_switch')
        this.addProjectButton = Selector('button[class="ist_button ist_button_red"]').withText("Add")
        //Projects details
        this.editProjectButton = Selector('div[class="icon_menu_item__content"]').withText("Edit project")
        // Delete method selectors
        this.projectLabelOptions = Selector('td[class="menu"]')
        this.deleteProjectOption = Selector('td[data-track="projects|menu_delete"]')
        this.confirmDeleteButton = Selector('button').withText("Delete")
    }

    async deleteProjects(){
        let count = await sidebarOptions.projectLabel.count
        if (count > 0) {
            do {
                await t
                    .rightClick(sidebarOptions.projectLabel.nth(count - 1))
                    .click(this.deleteProjectOption)
                    .click(this.confirmDeleteButton)
                    count = await sidebarOptions.projectLabel.count
            }
            while (count > 0);
        }
    }

    async validateProject(PROJECT_NAME, PROJECT_COLOR, isFavorite=false){
        let favoriteFlag = isFavorite
        await t
        .rightClick(sidebarOptions.projectLabel)
        .click(this.editProjectButton)

        let targetProject = {
            name: await this.projectName.value,
            color: await this.colorList.innerText,
            isFavorite: await this.favoriteToggle.hasClass('reactist_switch--checked')
        }

        if(targetProject.name == PROJECT_NAME && targetProject.color == PROJECT_COLOR && targetProject.isFavorite == favoriteFlag){
            return true
        } 
        else{
            return false
        }
    }

    async createNewProject(PROJECT_NAME, PROJECT_COLOR, isFavorite=false){
        await t
        .hover(sidebarOptions.sectionName)
        .click(sidebarOptions.plusProjectIcon)
        .typeText(this.projectName, PROJECT_NAME, {paste: true})
        .click(this.colorList)
        .click(this.selectedColorLabel.withText(PROJECT_COLOR))
        if(isFavorite == true){
            await t.click(this.favoriteToggle)
        }
        await t.click(this.addProjectButton)
    }

}

export default new projectsPage()