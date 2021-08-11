import { validUser } from '../data/Roles'
import { PROJECT } from '../data/Constants'
import projectsPage from '../pages/projectsPage'

fixture('Create a new project feature test')
    .beforeEach(async t=> {
        await t.useRole(validUser)
        await projectsPage.deleteProjects(projectsPage.projectLabel)
    })

test('As a valid user, I should be able to create a new project, favorite it and change its color', async t=>{
    await projectsPage.createNewProject(PROJECT.NAME, PROJECT.COLOR.OLIVE_GREEN)
})