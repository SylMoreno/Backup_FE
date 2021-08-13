import {Selector, t} from 'testcafe'
import todayPage from './TodayPage'

class upcomingPage{
    constructor(){
        this.taskLabels = Selector('.task_list_item')
        this.editUpcomingTaskOption = Selector('div').withText("Edit task")
        this.calendarButton = Selector('span[class="date"]')
    }

    async validateAddedTasks(TASK_NAME, TASK_DUE, taskLabels){
        let TASK_NUMBER = await this.taskLabels.count

        await t
        .rightClick(this.taskLabels)
        .click(this.editUpcomingTaskOption)

        let targetTask = {
            name: await todayPage.taskTitleField.value,
            date: await this.calendarButton.innerText,
            number: TASK_NUMBER
        }

        if(targetTask.name == TASK_NAME && targetTask.date == TASK_DUE && targetTask.number == taskLabels){
            return true
        } 
        else{
            return false
        }
    }
}

export default new upcomingPage()