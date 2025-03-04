package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import support.Utils;

public class CadastroPage extends Utils {

    WebDriver driver;

    private By create_user_field = By.id("user");
    private By create_email_field = By.id("email");
    private By create_senha_field = By.id("password");
    private By cadastrar_button = By.id("btnRegister");
    private By cadastro_realizado = By.id("swal2-title");
    private By check_button = By.cssSelector("body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled");


    public CadastroPage(WebDriver driver) {
        this.driver = driver;
    }

    public void acessarTelaCadastro() {
        driver.get("https://automationpratice.com.br/register");
        waitElementBePresent(create_user_field, 20);
    }

    public void preencherDadosCadastro() {
        driver.findElement(create_user_field).sendKeys(getRandomUser());
        driver.findElement(create_email_field).sendKeys(getRandomEmail());
        driver.findElement(create_senha_field).sendKeys("123456");
    }

    public void checkCriarCadastroBotao() {
        waitElementBePresent(cadastrar_button, 20);
        Assert.assertEquals(true, driver.findElement(cadastrar_button).isDisplayed());
    }

    public void clickCadastrar() {
        driver.findElement(cadastrar_button).click();
    }

    public void verificarCadastroRealizado(){
        String texto_cadastro = driver.findElement(cadastro_realizado).getText();
        Assert.assertEquals("Cadastro realizado!", texto_cadastro);
        waitElementBePresent(check_button, 20);
        driver.findElement(check_button).click();
    }
}