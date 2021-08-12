import { Selector, t } from 'testcafe'
import { PROJECT } from '../data/Constants'
import sidebarOptions from './sidebarOptions'

class projectsPage{
    constructor(){
        this.projectName = Selector('input[id="edit_project_modal_field_name"]')
        this.colorList = Selector('button[class="color_dropdown_toggle"]')
        // Delete method selectors
        this.projectLabelOptions = Selector('td[class="menu"]')
        this.deleteProjectOption = Selector('#menu_delete_text')
        this.confirmDeleteButton = Selector('buttpn[class="ist_button_red"]')
    }

    async deleteProjects(projectLabel){
        let totalProjects = sidebarOptions.projectLabel.count
        for(let i = totalProjects; i >= 0; i--){
            if(totalProjects>0){
            await t
            .click(sidebarOptions.projectLabelOptions)
            .click(this.deleteProjectOption)
            .click(this.confirmDeleteButton)
            }
            totalProjects--
        }
    }

    async createNewProject(PROJECT_NAME, PROJECT_COLOR){
        await t
        .click(this.plusProjectIcon)
        .typeText(this.projectName, PROJECT_NAME, {paste: true})
        .click(this.colorList)
    }
}

export default new projectsPage()