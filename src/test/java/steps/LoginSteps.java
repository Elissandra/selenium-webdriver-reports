package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.LoginPage;
import runner.RunCucumberTest;


public class LoginSteps extends RunCucumberTest {

    LoginPage loginPage = new LoginPage(driver);


    @Dado("^que estou na tela de login$")
    public void que_estou_na_tela_de_login() {
        loginPage.acessarTelaLogin();

    }

    @Quando("^eu preencho os dados de login$")
    public void eu_preencho_os_dados_de_login() {
        loginPage.preencherDadosLogin();

    }

    @Quando("^clico no botão login$")
    public void clico_no_botão_login() {
        loginPage.acessarLogin();

    }

    @Então("^vejo a mensagem login realizado$")
    public void vejo_a_mensagem_login_realizado() {
        loginPage.verificarLoginRealizado();
    }
}
