const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
require("dotenv").config();
const URL = process.env.AWS_ENDPOINT;
describe("Sign up", () => {
    let driver;

    before(async function () {
        // Khởi tạo WebDriver
        driver = await new Builder().forBrowser("chrome").build();
    });

    after(async function () {
        // Đóng WebDriver sau khi hoàn thành tất cả các test case
        await driver.quit();
    });

    beforeEach(async function () {
        await driver.get(URL + "/signUp");
        await driver.sleep(2000);
    });

    it("Test Case 1: Đăng ký tài khoản", async () => {
        await driver.findElement(By.xpath("//input")).sendKeys("qthuat6");

        await driver
            .findElement(By.xpath("//div[2]/div/div/input"))
            .sendKeys("thuat6@gmail.com");

        await driver
            .findElement(By.xpath("//div[3]/div/div/input"))
            .sendKeys("Vo Dinh Quoc Thuat");

        await driver
            .findElement(By.xpath("//div[4]/div/div/input"))
            .sendKeys("Abc1234@");

        await driver
            .findElement(By.xpath("//div[5]/div/div/input"))
            .sendKeys("Abc1234@");

        await driver.findElement(By.xpath("//div[6]/button")).click();

        await driver.sleep(5000);

        await driver
            .takeScreenshot()
            .then((image) =>
                require("fs").writeFileSync(
                    "result-images/signup.png",
                    image,
                    "base64"
                )
            );
    });
});
