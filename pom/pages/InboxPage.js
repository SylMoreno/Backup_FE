import { Selector, t } from 'testcafe'
import basePage from './BasePage'

class inboxPage {
    constructor(){
        this.inboxTaskLabels = Selector('.task_list_item')
        // This.checkTaskButton = Selector('.task_checkbox__circle')
        this.dueDateSublabel = Selector('.task_list_item__info_tags')
        // Task modal options
        this.deleteTaskOption = Selector('.icon_menu_item__content').withText("Delete task")
        this.confirmDeleteModal = Selector('button[class="ist_button ist_button_red"]').withText("Delete")
    }

    async deleteAllTasks(){
        await t.click(basePage.inboxButton)
        let totalTasks = await this.inboxTaskLabels.count
        if (totalTasks > 0) {
            do {
                await t
                .rightClick(this.inboxTaskLabels)
                .click(this.deleteTaskOption)
                .click(this.confirmDeleteModal)
                totalTasks = await this.inboxTaskLabels.count
            }
            while (totalTasks > 0);
        }
    }
}

export default new inboxPage()