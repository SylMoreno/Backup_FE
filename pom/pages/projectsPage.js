import { Selector, t } from 'testcafe'
import BasePage from './BasePage'

class ProjectsPage{
    constructor(){
        //Projects details
        this.editProjectButton = Selector('div[class="icon_menu_item__content"]').withText("Edit project")
        // Delete method selectors
        this.projectLabelOptions = Selector('td[class="menu"]')
        this.deleteProjectOption = Selector('td[data-track="projects|menu_delete"]')
        this.confirmDeleteButton = Selector('button').withText("Delete")
    }

    async deleteProjects(){
        let count = await BasePage.projectLabel.count
        if (count > 0) {
            do {
                await t
                    .rightClick(BasePage.projectLabel.nth(count - 1))
                    .click(this.deleteProjectOption)
                    .click(this.confirmDeleteButton)
                    count = await BasePage.projectLabel.count
            }
            while (count > 0);
        }
    }

    async validateProject(PROJECT_NAME, PROJECT_COLOR, isFavorite=false){
        let favoriteFlag = isFavorite
        await t
        .rightClick(BasePage.projectLabel)
        .click(this.editProjectButton)

        let targetProject = {
            name: await BasePage.projectName.value,
            color: await BasePage.colorList.innerText,
            isFavorite: await BasePage.favoriteToggle.hasClass('reactist_switch--checked')
        }

        if(targetProject.name == PROJECT_NAME && targetProject.color == PROJECT_COLOR && targetProject.isFavorite == favoriteFlag){
            return true
        } 
        else{
            return false
        }
    }
}

export default new ProjectsPage()