import { Selector, t } from 'testcafe'
import { PROJECT } from '../data/Constants'

class projectsPage{
    constructor(){
        this.plusProjectIcon = Selector('button[aria-label="Add Project"]')
        this.projectName = Selector('input[id="edit_project_modal_field_name"]')
        this.colorList = Selector('button[class="color_dropdown_toggle"]')
        // Delete method selectors
        this.projectLabel = Selector('.item_table')
        this.projectLabelOptions = Selector('td[class="menu"]')
        this.deleteProjectOption = Selector('#menu_delete_text')
        this.confirmDeleteButton = Selector('buttpn[class="ist_button_red"]')
    }

    async deleteProjects(projectLabel){
        let totalProjects = this.projectLabel.count
        for(let i = totalProjects; i >= 0; i--){
            if(totalProjects>0){
            await t
            .click(this.projectLabelOptions)
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