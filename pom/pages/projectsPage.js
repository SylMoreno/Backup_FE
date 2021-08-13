import { Selector, t } from 'testcafe'
import basePage from './basePage'

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
        let count = await basePage.projectLabel.count
        if (count > 0) {
            do {
                await t
                    .rightClick(basePage.projectLabel.nth(count - 1))
                    .click(this.deleteProjectOption)
                    .click(this.confirmDeleteButton)
                    count = await basePage.projectLabel.count
            }
            while (count > 0);
        }
    }

    async validateProject(PROJECT_NAME, PROJECT_COLOR, isFavorite=false){
        let favoriteFlag = isFavorite
        await t
        .rightClick(basePage.projectLabel)
        .click(this.editProjectButton)

        let targetProject = {
            name: await basePage.projectName.value,
            color: await basePage.colorList.innerText,
            isFavorite: await basePage.favoriteToggle.hasClass('reactist_switch--checked')
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