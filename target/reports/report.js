$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cadastro_usuario.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Cadastro de usuário",
  "description": "",
  "id": "cadastro-de-usuário",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@cadastro"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Registrar um novo usuário com sucesso",
  "description": "",
  "id": "cadastro-de-usuário;registrar-um-novo-usuário-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 6,
      "name": "@cadastro-sucesso"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que estou na tela de cadastro",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "preencho os dados de cadastro",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "clico em cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "vejo a mensagem de cadastro realizado",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroSteps.que_estou_na_tela_de_cadastro()"
});
formatter.result({
  "duration": 4772512400,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.preencho_os_dados_de_cadastro()"
});
formatter.result({
  "duration": 1282973800,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_em_cadastrar()"
});
formatter.result({
  "duration": 348459600,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.vejo_a_mensagem_de_cadastro_realizado()"
});
formatter.result({
  "duration": 463587500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Realizar login com sucesso",
  "description": "",
  "id": "cadastro-de-usuário;realizar-login-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 13,
      "name": "@login-sucesso"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "eu preencho os dados de login",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "clico no botão login",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "vejo a mensagem login realizado",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 1714210900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.eu_preencho_os_dados_de_login()"
});
formatter.result({
  "duration": 893212800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botão_login()"
});
formatter.result({
  "duration": 180067700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.vejo_a_mensagem_login_realizado()"
});
formatter.result({
  "duration": 481861400,
  "status": "passed"
});
formatter.uri("desconto.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 4,
  "name": "Receber o cupom de desconto",
  "description": "Eu como usuário da qazando\r\nquero receber um cupom de desconto\r\npara comprar um curso com valor reduzido",
  "id": "receber-o-cupom-de-desconto",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@desconto"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Visualizar código de desconto",
  "description": "",
  "id": "receber-o-cupom-de-desconto;visualizar-código-de-desconto",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 9,
      "name": "@gerar-cupom"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "que estou no site",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "eu preencho o meu e-mail",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "clico em ganhar cupom",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "eu vejo o código de desconto",
  "keyword": "Então "
});
formatter.match({
  "location": "DescontosSteps.acessar_site_qazando()"
});
formatter.result({
  "duration": 2927411500,
  "status": "passed"
});
formatter.match({
  "location": "DescontosSteps.eu_preencho_o_meu_e_mail()"
});
formatter.result({
  "duration": 3089362200,
  "status": "passed"
});
formatter.match({
  "location": "DescontosSteps.clico_em_ganhar_cupom()"
});
formatter.result({
  "duration": 223240500,
  "status": "passed"
});
formatter.match({
  "location": "DescontosSteps.eu_vejo_o_código_de_desconto()"
});
formatter.result({
  "duration": 63095100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Teste com falha",
  "description": "",
  "id": "receber-o-cupom-de-desconto;teste-com-falha",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 16,
      "name": "@teste-falha"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "que tenho um cupom gerado",
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "eu falho",
  "keyword": "Quando "
});
formatter.match({
  "location": "DescontosSteps.que_tenho_um_cupom_gerado()"
});
formatter.result({
  "duration": 114500,
  "status": "passed"
});
formatter.match({
  "location": "DescontosSteps.eu_falho()"
});
formatter.result({
  "duration": 41927700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#buttonX\"}\n  (Session info: chrome\u003d134.0.6998.178)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ELISSANDRA\u0027, ip: \u0027192.168.0.186\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_441\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 134.0.6998.178, chrome: {chromedriverVersion: 133.0.6943.53 (9a80935019b0..., userDataDir: C:\\Users\\olive\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57990}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 0f1418e3ce86681a86b1ae4915856442\n*** Element info: {Using\u003did, value\u003dbuttonX}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat steps.DescontosSteps.eu_falho(DescontosSteps.java:42)\r\n\tat ✽.Quando eu falho(desconto.feature:19)\r\n",
  "status": "failed"
});
});