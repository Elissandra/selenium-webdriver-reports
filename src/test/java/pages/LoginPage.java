package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import support.Utils;


public class LoginPage extends Utils {

    WebDriver driver;
    private By user_email = By.id("user");
    private By user_password = By.id("password");
    private By login_realizado = By.id("swal2-title");
    private  By check_button = By.cssSelector("body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled");


    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }

    public void acessarTelaLogin() {
        driver.get("https://automationpratice.com.br/login#!");
        waitElementBePresent(user_email, 20);
    }

    public void preencherDadosLogin() {
        driver.findElement(user_email).sendKeys(getRandomEmail());
        driver.findElement(user_password).sendKeys("123456");
    }

    public void acessarLogin() {
        driver.findElement(By.id("btnLogin")).click();
    }

    public void verificarLoginRealizado(){
        String texto_cadastro = driver.findElement(login_realizado).getText();
        Assert.assertEquals("Login realizado", texto_cadastro);
        waitElementBePresent(check_button, 20);
        driver.findElement(check_button).click();
    }
}
