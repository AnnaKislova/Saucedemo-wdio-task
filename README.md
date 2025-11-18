## Saucedemo WDIO Tests

### Project Description:
This project contains automated tests for the login form of Sauce Demo (https://www.saucedemo.com/) 
using WebDriverIO with Mocha framework. Tests cover different user scenarios and run on Chrome and Firefox browsers.

### Test Scenarios:

#### UC-1: Test Login form with empty credentials

* Type any credentials into "Username" and "Password" fields.
* Clear the inputs.
* Hit the "Login" button.
* Check the error messages: "Username is required".

#### UC-2: Test Login form with credentials by passing Username

* Type a username.
* Enter a password.
* Clear the password input.
* Click the "Login" button.
* Verify the error message: "Password is required".

#### UC-3: Test Login form with credentials by passing Username & Password

* Use one of the accepted usernames.
* Enter password: "secret_sauce".
* Click the "Login" button.
* Validate the page title "Swag Labs" or check for error message if the user is locked out.

### Project Structure:

* src/config/wdio.conf.js - WebDriverIO configuration
* src/po/pages - Page Object Models
* src/po/components - Page components 
* src/tests/login.spec.js - Login form tests
* package-lock.json
* package.json
* README.md

### How to Run Tests:

* Install dependencies: npm install
* Run all tests: npm run wdio
* Tests run in parallel on Chrome and Firefox.

### Notes:

* Tests use Page Object Model (POM) pattern.
* Reporting uses default spec reporter from WebDriverIO.
* Make sure Chrome and Firefox are installed on your machine.