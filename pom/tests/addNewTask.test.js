import { validUser } from '../data/Roles'
import {TASK} from '../data/Constants'
import todayPage from '../pages/todayPage'

fixture('Add task feature test')
    .beforeEach(async t=> {
        await t.useRole(validUser)
        await todayPage.deleteAllTasks(todayPage.tasksQty)
    })

test('As a valid user, I should be able to add a new task with Today as due date', async t=> {
    await todayPage.addNewTask(TASK.SINGLE.NUMBER, TASK.SINGLE.NAME)
    await t.expect(todayPage.taskName.innerText).contains(TASK.SINGLE.NAME)
})