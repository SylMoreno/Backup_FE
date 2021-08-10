import { Selector, t } from 'testcafe'
import sidebarOptions from './sidebarOptions'

class inboxPage {
    constructor(){
        this.inboxTaskLabels = Selector('.task_list_item')
        this.checkTaskButton = Selector('.task_checkbox__circle')
        this.dueDateSublabel = Selector('.task_list_item__info_tags')
    }

    async deleteAllTasks(inboxTaskLabels){
        await t.click(sidebarOptions.inboxButton)   
        let totalTasks = await this.inboxTaskLabels.count
        for(let i = totalTasks; i >= 0; i--){
            if(totalTasks>0){
            await t.click(this.checkTaskButton)
            }
            totalTasks--
        }
    }
}

export default new inboxPage()