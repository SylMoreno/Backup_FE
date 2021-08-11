# FrontendChallenge
This is the repository for the second Deliverable of Wizeline's qa-bootcamp

## Initialize the project in your computer
- Create a folder where to allocate project and open it (you can use git bash or IDE console)
- Type in your console: npm init

## How to install Node.js (use git bash or IDE console)
- Go to https://nodejs.org/en/
- Install recommended version (because it's more stable)

## How to install Testcafe (if needed, using git bash or IDE console)
- In your console, type the following command: npm install testcafe

## How to install .env
- Type in your console: npm install dotenv
###### To confirm correct installation:
- Type in your console: node -v (node version must be displayed on screen)
- Type in your console: testcafe -v (testcafe version must be displayed as well)

###### Using page-object-model structure, you’ll find the following structure:
* pom
  * data -> As the name indicates, is data who doesn’t change. Is static.
    * Constants and Roles
  * pages -> CSS Selectors according to the indicated screen.
  * tests -> Here are all scripts used to test features.
  * Reports

## Feature testing scripts
1. Use `chrome-all-tests: "testcafe chrome:headless pom/tests --reporter html:Reports/report.html` to run all tests
2. Use `chrome-login-test` to perform all login tests available (chrome browser)
3. Use `chrome-addNewTask-test` to perform all *create new tasks*' tests requested (chrome browser)
4. Use `chrome-addnewProject-test` to perform all *create new project* test requested (chrome browser)
5. Use `chrome-smoke-testing` to only run smoke tests
6. Use `lint` for estatic analysis

## Be aware to create your own .env file pom level. The following constants are used:
- BASE_URL to refer page's Url
- STANDARD_USER_MAIL to indicate the email that you'd be using to perform the tests. (create an account before start)
- STANDARD_USER_PASSWORD to indicate the password you'll be using to log successfully.
