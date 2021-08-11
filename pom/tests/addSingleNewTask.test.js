import { validUser } from '../data/Roles'
import {TASK} from '../data/Constants'
import todayPage from '../pages/todayPage'
import inboxPage from '../pages/inboxPage'

fixture('Add task feature test')
    .beforeEach(async t=> {
        await t.useRole(validUser)
        await inboxPage.deleteAllTasks(inboxPage.inboxTaskLabels)
    })

test.meta('type', 'smoke')('As a valid user, I should be able to add a new task with Today as due date', async t=> {
    await todayPage.addNewTask(TASK.SINGLE.NUMBER, TASK.SINGLE.DUE.TODAY, TASK.SINGLE.NAME)
    await t.expect(todayPage.taskLabel.innerText).contains(TASK.SINGLE.NAME)
})

test('As a valid user, I should be able to add a new task with Tomorrow as due date', async t=> {
    await todayPage.addNewTask(TASK.SINGLE.NUMBER, TASK.SINGLE.DUE.TOMORROW, TASK.SINGLE.NAME)
    await t.expect(todayPage.taskLabel.innerText).contains(TASK.SINGLE.NAME)
    await t.expect(inboxPage.dueDateSublabel.innerText).contains(TASK.SINGLE.DUE.TOMORROW)
})