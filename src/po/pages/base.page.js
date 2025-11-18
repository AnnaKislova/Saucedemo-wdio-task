class BasePage {
    async open() {
        await browser.url("/");
    }
}

module.exports = BasePage;