import { Selector, t } from 'testcafe'
import BasePage from './BasePage'

class InboxPage {
    constructor(){
        this.inboxTaskLabels = Selector('.task_list_item')
        this.checkTaskButton = Selector('.task_checkbox__circle')
        this.dueDateSublabel = Selector('.task_list_item__info_tags')
    }

    async deleteAllTasks(){
        await t.click(BasePage.inboxButton)
        let totalTasks = await this.inboxTaskLabels.count
        if (totalTasks > 0) {
            do {
                await t.click(this.checkTaskButton)
                totalTasks = await this.inboxTaskLabels.count
            }
            while (totalTasks > 0);
        }
    }
}

export default new InboxPage()