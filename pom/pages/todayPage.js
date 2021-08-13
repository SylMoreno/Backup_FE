import {Selector, t} from 'testcafe'
import basePage from './basePage'

class todayPage{
    constructor(){
        this.headerTitle = Selector('header[data-testid="view_header"]')
        //Tasks
        this.addTaskIcon = Selector('button[class="plus_add_button"]')
        this.taskTitleField = Selector('div[role="textbox"]')
        this.taskCalendarIcon = Selector('span[class="date date_today"]')
        this.calendarTomorrowOption = Selector('div[class="scheduler-suggestions-item-label"]').withText("Tomorrow")
        this.taskLabel = Selector('.task_list_item')
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

    async addNewTask(TASK_NUMBER, TASK_DUE, TASK_NAME){
        let due = TASK_DUE

        switch(due){
            case "Tomorrow":
                if(TASK_NUMBER == 1){
                    await t
                    .click(basePage.todayButton)
                    .click(this.addTaskIcon)
                    .typeText(this.taskTitleField, TASK_NAME, {paste: true})
                    .click(this.taskCalendarIcon)
                    .click(this.calendarTomorrowOption)
                    .pressKey('enter')
                    .pressKey('esc')
                    .click(basePage.inboxButton)
                    await t.expect(await this.validateTaskNumber(TASK_NUMBER)).ok()
                }
                else {
                    for(let i = 1; i <= TASK_NUMBER; i++){
                        await t
                        .click(basePage.todayButton)
                        .click(this.addTaskIcon)
                        .typeText(this.taskTitleField, i + TASK_NAME, {paste: true})
                        .click(this.taskCalendarIcon)
                        .click(this.calendarTomorrowOption)
                        .pressKey('enter')
                        .pressKey('esc')
                        .click(basePage.inboxButton)
                    }
                    await t.expect(await this.validateTaskNumber(TASK_NUMBER)).ok()
                }
                break;
            case "Today":
                if(TASK_NUMBER == 1){
                    await t
                    .click(basePage.todayButton)
                    .click(this.addTaskIcon)
                    .typeText(this.taskTitleField, TASK_NAME, {paste: true})
                    .pressKey('enter')
                    .pressKey('esc')
                    await t.expect(await this.validateTaskNumber(TASK_NUMBER)).ok()
                }
                else {
                    await t.click(basePage.todayButton)
                    for(let i = 1; i <= TASK_NUMBER; i++){
                        await t
                        .click(this.addTaskIcon)
                        .typeText(this.taskTitleField, "{" + i + "} " + TASK_NAME, {paste: true})
                        .pressKey('enter')
                        .pressKey('esc')
                        await t.expect(this.taskLabel.nth(i - 1).innerText).contains("{" + i + "} " + TASK_NAME)
                    }
                }
                break;
        }

    }
}

export default new todayPage()