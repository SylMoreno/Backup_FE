import { validUser } from '../data/Roles'
import { PROJECT } from '../data/Constants'
import projectsPage from '../pages/ProjectsPage'
import basePage from '../pages/BasePage'

fixture('Create a new project feature test')
    .beforeEach(async t => {
        await t.useRole(validUser)
        await projectsPage.deleteProjects()
        await t.expect(basePage.projectLabel.exists).notOk()
        await t.wait(3000)
    })

test.meta('type', 'smoke')('As a valid user, I should be able to create a new project, favorite it and change its color', async t => {
    await basePage.createNewProject(PROJECT.FAVORITE.NAME, PROJECT.FAVORITE.COLOR, PROJECT.FAVORITE.IS_FAVORITE)
    await t.click(basePage.favoriteProjectLabel.withText(PROJECT.FAVORITE.NAME))
    await t.expect(await basePage.validateProject(PROJECT.FAVORITE.NAME, PROJECT.FAVORITE.COLOR, PROJECT.FAVORITE.IS_FAVORITE)).ok()
})