import { validUser } from '../data/Roles'
import { TASK } from '../data/Constants'
import todayPage from '../pages/todayPage'
import inboxPage from '../pages/inboxPage'

fixture('Add multiple tasks feature test')
    .beforeEach(async t => {
        await t.useRole(validUser)
        await inboxPage.deleteAllTasks(inboxPage.inboxTaskLabels)
    })

test('As a valid user, I should be able to add multiple new tasks', async t => {
    await todayPage.addNewTask(TASK.MULTIPLE.NUMBER, TASK.MULTIPLE.DUE.TODAY, TASK.MULTIPLE.NAME)
    await t.expect(await todayPage.validateTaskNumber(TASK.MULTIPLE.NUMBER)).ok()
})