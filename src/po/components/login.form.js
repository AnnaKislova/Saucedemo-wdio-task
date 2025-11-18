class LoginForm {
    get inputUsername() { 
        return $("#user-name");
     };
     get inputPassword() {
        return $("#password");
     };
     get buttonLogin() { 
        return $("[data-test='login-button']");
     };
     get errorMessage() { 
        return $("h3[data-test='error']");
     };
     get title() {
         return $(".app_logo"); 
     };

}

module.exports = LoginForm;