import { Selector, t } from 'testcafe'
import sidebarOptions from './sidebarOptions'

class projectsPage{
    constructor(){
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
            name: await sidebarOptions.projectName.value,
            color: await sidebarOptions.colorList.innerText,
            isFavorite: await sidebarOptions.favoriteToggle.hasClass('reactist_switch--checked')
        }

        if(targetProject.name == PROJECT_NAME && targetProject.color == PROJECT_COLOR && targetProject.isFavorite == favoriteFlag){
            return true
        } 
        else{
            return false
        }
    }
}

export default new projectsPage()