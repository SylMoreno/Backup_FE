import { validUser } from '../data/Roles'
import {TASK} from '../data/Constants'
import TodayPage from '../pages/todayPage'
import InboxPage from '../pages/inboxPage'

fixture('Add task feature test')
    .beforeEach(async t => {
        await t.useRole(validUser)
        await InboxPage.deleteAllTasks()
        await t.expect(InboxPage.inboxTaskLabels.exists).notOk()
        await t.wait(3000)
    })

test.meta('type', 'smoke')('As a valid user, I should be able to add a new task with Today as due date', async t => {
    await TodayPage.addNewTask(TASK.SINGLE.NUMBER, TASK.SINGLE.DUE.TODAY, TASK.SINGLE.NAME)
    await t.expect(TodayPage.taskLabel.innerText).contains(TASK.SINGLE.NAME)
})

test('As a valid user, I should be able to add a new task with Tomorrow as due date', async t => {
    await TodayPage.addNewTask(TASK.SINGLE.NUMBER, TASK.SINGLE.DUE.TOMORROW, TASK.SINGLE.NAME)
    await t.expect(TodayPage.taskLabel.innerText).contains(TASK.SINGLE.NAME)
    await t.expect(InboxPage.dueDateSublabel.innerText).contains(TASK.SINGLE.DUE.TOMORROW)
})

test.meta('type', 'smoke')('As a valid user, I should be able to add multiple new tasks', async t => {
    await TodayPage.addNewTask(TASK.MULTIPLE.NUMBER, TASK.MULTIPLE.DUE.TODAY, TASK.MULTIPLE.NAME)
    await t.expect(await TodayPage.validateTaskNumber(TASK.MULTIPLE.NUMBER)).ok()
})