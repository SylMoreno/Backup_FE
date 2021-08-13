import {Selector, t} from 'testcafe'
import todayPage from './TodayPage'

class upcomingPage{
    constructor(){
        this.taskLabels = Selector('.task_list_item')
        this.editUpcomingTaskOption = Selector('div[class="icon_menu_item__content"]').withText("Edit task")
        this.tomorrowTaskName = Selector('div[class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"]')
        this.calendarButton = Selector('span[class="date date_tom"]')
    }

    async validateAddedTasks(TASK_NAME, TASK_DUE){
        await t
        .rightClick(this.taskLabels)
        .click(this.editUpcomingTaskOption)

        let targetTask = {
            name: await this.tomorrowTaskName.innerText,
            date: await this.calendarButton.innerText
        }

        if(targetTask.name == TASK_NAME && targetTask.date == TASK_DUE){
            return true
        } 
        else{
            return false
        }
    }
}

export default new upcomingPage()