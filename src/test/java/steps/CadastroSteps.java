package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.CadastroPage;
import runner.RunCucumberTest;


public class CadastroSteps extends RunCucumberTest {

    CadastroPage cadastroPage = new CadastroPage(driver);

    @Dado("^que estou na tela de cadastro$")
    public void que_estou_na_tela_de_cadastro() {
        cadastroPage.acessarTelaCadastro();
    }

    @Quando("^preencho os dados de cadastro$")
    public void preencho_os_dados_de_cadastro() {
        cadastroPage.preencherDadosCadastro();
        cadastroPage.checkCriarCadastroBotao();
    }

    @Quando("^clico em cadastrar$")
    public void clico_em_cadastrar() {
        cadastroPage.clickCadastrar();
    }

    @Então("^vejo a mensagem de cadastro realizado$")
    public void vejo_a_mensagem_de_cadastro_realizado() {
        cadastroPage.verificarCadastroRealizado();
    }
}

