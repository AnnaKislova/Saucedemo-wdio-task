// Launch URL: https://www.saucedemo.com/
// UC-1 Test Login form with empty credentials:
// Type any credentials into "Username" and "Password" fields.
// Clear the inputs.
// Hit the "Login" button.
// Check the error messages: "Username is required".
const BasePage = require('../po/pages/base.page');
const basePage = new BasePage();
const LoginPage = require("../po/pages/login.page");
const loginPage = new LoginPage;
const { users, invalidUser } = require("../data/users");


describe("Login form validation tests", () => {
    beforeEach( async () => {
        await basePage.open();
    })

    it("UC-1 Test Login form with empty credentials", async () => {

            await loginPage.setUsername(invalidUser.username);
            await loginPage.setPassword(invalidUser.password);

            await loginPage.clearUsername();
            await loginPage.clearPassword();

            await browser.refresh();

            expect(await loginPage.getUsernameValue()).toHaveValue("");

            expect(await loginPage.getPasswordValue()).toHaveValue("");
        
            await loginPage.submit();

            expect(await loginPage.getErrorMessageText()).toBe("Epic sadface: Username is required");

         });

//         UC-2 Test Login form with credentials by passing Username:
    // Type any credentials in username.
    // Enter password.
    // Clear the "Password" input.
    // Hit the "Login" button.
    // Check the error messages: "Password is required"

    it("UC-2 Test Login form with credentials by passing Username", async () => {
       
        await loginPage.setUsername(invalidUser.username);
        expect(await loginPage.getUsernameValue()).toHaveValue(invalidUser.username);

        // await loginPage.setPassword("123456");
        await loginPage.clearPassword();
        expect(await loginPage.getPasswordValue()).toHaveValue("");
        
        await loginPage.submit();

        expect(await loginPage.getErrorMessageText()).toBe("Epic sadface: Password is required");

    });
    // UC-3 Test Login form with credentials by passing Username & Password:
    // Type credentials in username which are under Accepted username are sections.
    // Enter password as secret sauce.
    // Click on Login and validate the title “Swag Labs” in the dashboard.

    

    users.forEach(user => {
        it(`UC-3 Test login for ${user.username}`, async () => {
            await loginPage.setUsername(user.username);
            await loginPage.setPassword(user.password);
            await loginPage.submit();

            if (user.result === "success") {
                const title = await loginPage.getTitleText();
                await expect(title).toBe("Swag Labs");
        }
            else {

            expect(await loginPage.getErrorMessageText()).toBe(user.result);
                
            };
    });
});

});
