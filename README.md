# FrontendChallenge
This is the repository for the second Deliverable of Wizeline's qa-bootcamp
### Btw... it's alive on Jenkins! See: https://drive.google.com/file/d/1M0rDaPhysn2B0Le7VORHk91Y-BLCeY4G/view?usp=sharing

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
1. Use `run-all-tests` to run all tests, headless mode
2. Use `login-feature-chrome` to perform all login tests available (chrome browser, headless mode)
3. Use `login-feature-multibrowser`to perform all login tests with chrome, firefox and safari browsers
4. Use `add-NewTask-feature` to perform all *create new tasks*' tests requested (chrome browser)
5. Use `add-NewProject-feature` to perform all *create new project* test requested (chrome browser)
6. Use `test-smoke` to only run tests with type="smoke"
7. Use `newman`to run API testing
8. Use `lint-init`to initialize lint
9. Use `lint` for perform static analysis

## Be aware to create your own .env file pom level. The following constants are used:
- `BASE_URL=https://www.todoist.com/`
- `VALID_MAIL=youremail@email.com. (create an account before start)`
- `VALID_PASSWORD=yourpassword`
