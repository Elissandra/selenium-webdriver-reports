package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import org.openqa.selenium.By;
import pages.HomePage;
import runner.RunCucumberTest;


public class DescontosSteps extends RunCucumberTest{

    HomePage homePage = new HomePage(driver);

    @Dado("^que estou no site$")
    public void acessar_site_qazando() {

        homePage.acessarAplicacao();
    }

    @Quando("^eu preencho o meu e-mail$")
    public void eu_preencho_o_meu_e_mail() throws InterruptedException {
        homePage.scrollDown();
        homePage.preencheEmail();
    }

    @Quando("^clico em ganhar cupom$")
    public void clico_em_ganhar_cupom() {

        homePage.clickGanharDesconto();
    }

    @Dado("^que tenho um cupom gerado$")
    public void que_tenho_um_cupom_gerado() {

        System.out.println("Tenho um cupom gerado!");
    }

    @Quando("^eu falho$")
    public void eu_falho() {

        driver.findElement(By.id("buttonX")).click();
    }

    @Então("^eu vejo o código de desconto$")
    public void eu_vejo_o_código_de_desconto() {

        homePage.verificarCupomDesconto();
    }
}
