const BasePage = require("./base.page");
const LoginForm = require("../components/login.form");

class LoginPage extends BasePage {

    constructor () {
        super()
        this.login = new LoginForm;
    }

    async setUsername(username) {
        await this.login.inputUsername.setValue(username);
    }

    async setPassword(password) {
        await this.login.inputPassword.setValue(password);
    }

    async clearUsername() {
        await this.login.inputUsername.clearValue();
}

    async clearPassword() {
        await this.login.inputPassword.clearValue();
}


    async submit() {
        await this.login.buttonLogin.click();
    }

    async getUsernameValue() {
        return await this.login.inputUsername.getValue();
}

    async getPasswordValue() {
        return await this.login.inputPassword.getValue();
}

    async getErrorMessageText() {
         return await this.login.errorMessage.getText();
}
    async getTitleText() {
        return await this.login.title.getText();
    }


}

module.exports = LoginPage;