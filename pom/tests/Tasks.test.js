import { validUser } from '../data/Roles'
import {TASK} from '../data/Constants'
import todayPage from '../pages/todayPage'
import inboxPage from '../pages/InboxPage'
import basePage from '../pages/BasePage'
import upcomingPage from '../pages/UpcomingPage'

fixture('Add task feature test')
    .beforeEach(async t => {
        await t.useRole(validUser)
        await inboxPage.deleteAllTasks()
        await t.expect(inboxPage.inboxTaskLabels.exists).notOk()
        await t.wait(3000)
    })

test.meta('type', 'smoke')('As a valid user, I should be able to add a new task with Today as due date', async t => {
    await todayPage.addNewTask(TASK.SINGLE.NUMBER, TASK.SINGLE.DUE.TODAY, TASK.SINGLE.NAME)
    await t.expect(todayPage.taskLabel.innerText).contains(TASK.SINGLE.NAME)
})

test.only('As a valid user, I should be able to add a new task with Tomorrow as due date', async t => {
    await todayPage.addNewTask(TASK.SINGLE.NUMBER, TASK.SINGLE.DUE.TOMORROW, TASK.SINGLE.NAME)
    await t.click(basePage.upcomingButton)
    await t.expect(await upcomingPage.validateAddedTasks(TASK.SINGLE.NAME, TASK.SINGLE.DUE.TOMORROW)).ok()
})

test.meta('type', 'smoke')('As a valid user, I should be able to add multiple new tasks', async t => {
    await todayPage.addNewTask(TASK.MULTIPLE.NUMBER, TASK.MULTIPLE.DUE.TODAY, TASK.MULTIPLE.NAME)
    await t.expect(await todayPage.validateTaskNumber(TASK.MULTIPLE.NUMBER)).ok()
})