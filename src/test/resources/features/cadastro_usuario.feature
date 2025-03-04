#language: pt

  @cadastro
  Funcionalidade: Cadastro de usuário

    @cadastro-sucesso
    Cenário: Registrar um novo usuário com sucesso
      Dado que estou na tela de cadastro
      Quando preencho os dados de cadastro
      E clico em cadastrar
      Então vejo a mensagem de cadastro realizado

    @login-sucesso
    Cenário: Realizar login com sucesso
      Dado que estou na tela de login
      Quando eu preencho os dados de login
      E clico no botão login
      Então vejo a mensagem login realizado







