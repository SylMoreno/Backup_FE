import { validUser } from '../data/Roles'
import { PROJECT } from '../data/Constants'
import ProjectsPage from '../pages/ProjectsPage'
import BasePage from '../pages/BasePage'

fixture('Create a new project feature test')
    .beforeEach(async t => {
        await t.useRole(validUser)
        await ProjectsPage.deleteProjects()
        await t.expect(BasePage.projectLabel.exists).notOk()
        await t.wait(3000)
    })

test.meta('type', 'smoke')('As a valid user, I should be able to create a new project, favorite it and change its color', async t => {
    await BasePage.createNewProject(PROJECT.FAVORITE.NAME, PROJECT.FAVORITE.COLOR, PROJECT.FAVORITE.IS_FAVORITE)
    await t.click(BasePage.favoriteProjectLabel.withText(PROJECT.FAVORITE.NAME))
    await t.expect(await ProjectsPage.validateProject(PROJECT.FAVORITE.NAME, PROJECT.FAVORITE.COLOR, PROJECT.FAVORITE.IS_FAVORITE)).ok()
})