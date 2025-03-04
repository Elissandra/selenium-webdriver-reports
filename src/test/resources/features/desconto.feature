# language: pt

    @desconto
    Funcionalidade: Receber o cupom de desconto
    Eu como usuário da qazando
    quero receber um cupom de desconto
    para comprar um curso com valor reduzido

    @gerar-cupom
    Cenário: Visualizar código de desconto
    Dado que estou no site
    Quando eu preencho o meu e-mail
    E clico em ganhar cupom
    Então eu vejo o código de desconto

    @teste-falha
    Cenário: Teste com falha
    Dado que tenho um cupom gerado
    Quando eu falho
