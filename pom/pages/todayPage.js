import {Selector, t} from 'testcafe'

class todayPage{
    constructor(){
        this.headerTitle = Selector('header[data-testid="view_header"]')
        //Tasks
        this.addTaskIcon = Selector('button[class="plus_add_button"]')
        this.taskTitleField = Selector('div[role="textbox"]')
        //Delete method selectors
        this.taskLabel = Selector('.task_list_item')
        this.checkTaskButton = Selector('.task_checkbox__circle')
    }

    async validateTaskNumber(taskLabel){
        let totalTasks = await this.taskLabel.count
        if(totalTasks == taskLabel){
            return true
        }
        else {
            return false
        }
    }

    async addNewTask(TASK_NUMBER, TASK_NAME){
            if(TASK_NUMBER == 1){
                await t
                .click(this.addTaskIcon)
                .typeText(this.taskTitleField, TASK_NAME, {paste: true})
                .pressKey('enter')
                .pressKey('esc')
                await t.expect(await this.validateTaskNumber(TASK_NUMBER)).ok()
            }
            else {
                for(let i = 1; i <= TASK_NUMBER; i++){
                    await t
                    .click(this.addTaskIcon)
                    .typeText(this.taskTitleField, TASK_NAME, {paste: true})
                    .pressKey('enter')
                    .pressKey('esc')
                }
                await t.expect(await this.validateTaskNumber(TASK_NUMBER)).ok()
            }
        }



    async deleteAllTasks(taskLabel){
        let totalTasks = await this.taskLabel.count
    
        for(let i = totalTasks; i >= 0; i--){
            if(totalTasks>0){
            await t.click(this.checkTaskButton)
            }
            totalTasks--
        }
    }
}

export default new todayPage()