import { validUser } from '../data/Roles'
import { PROJECT } from '../data/Constants'
import projectsPage from '../pages/projectsPage'
import sidebarOptions from '../pages/sidebarOptions'

fixture('Create a new project feature test')
    .beforeEach(async t => {
        await t.useRole(validUser)
        await projectsPage.deleteProjects()
        await t.expect(sidebarOptions.projectLabel.exists).notOk()
        await t.wait(3000)
    })

test.meta('type', 'smoke')('As a valid user, I should be able to create a new project, favorite it and change its color', async t => {
    await projectsPage.createNewProject(PROJECT.NAME, PROJECT.COLOR.BERRY_RED.NAME, PROJECT.FAVORITE)
    await t.click(sidebarOptions.favoriteProjectLabel.withText(PROJECT.NAME))
    await t.expect(await projectsPage.validateProject(PROJECT.NAME, PROJECT.COLOR.BERRY_RED.NAME, PROJECT.FAVORITE)).ok()
})