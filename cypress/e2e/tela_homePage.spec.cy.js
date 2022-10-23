/// <reference types="cypress"/>

//Parcela recorrente da url do site
var url = "https://automacaocombatista.herokuapp.com/";

describe("usuário", () => {
  it("deverá poder testar um exemplo de link", () => {
    //Acessar a página principal do site
    cy.visit(url + "treinamento/home");

    //Clicar na opção "Busca de elementos"
    cy.get("[class='collapsible-header waves-teal']").eq(0).click();

    //Clicar na opção de links
    cy.get("[data-method=get]").eq(2).click();
    cy.wait(1000);

    //Clicar na primeira opção de link
    cy.get("[class='col s6 center']").eq(0).click();
  });

  it("deverá poder testar os exemplos de inputs, textField e textArea", () => {
    //Acessar a página principal do site
    cy.visit(url + "treinamento/home");

    //Clicar na opção "Busca de elementos"
    cy.get("[class='collapsible-header waves-teal']").eq(0).click();

    //Clicar na opção de inputs, textfield e textarea
    cy.get("[data-method=get]").eq(3).click();
    cy.wait(1000);

    //Inserir valores nos inputs, texfields e textareas
    cy.get("[id=first_name]").type("Geraldo");
    cy.get("[id=last_name]").type("Pereira Neto");
    cy.get("[id=password]").type("qhw285kui");
    cy.get("[id=email]").type("geraldo2799@gmail.com");
    cy.get("[id=textarea1]").type("Realizando teste nesta TextArea");
  });

  it("deverá poder testar um exemplo de botão", () => {
    //Acessar a página principal do site
    cy.visit(url + "treinamento/home");

    //Clicar na opção "Busca de elementos"
    cy.get("[class='collapsible-header waves-teal']").eq(0).click();

    //Clicar na opção de botões
    cy.get("[data-method=get]").eq(4).click();
    cy.wait(1000);

    //Clicar na primeira opção de botão
    cy.get("[id=teste]").click();

    //Verificar se a mensagem de sucesso é exibida
    cy.get("[class='col s4']").eq(0).should("be.visible");
  });
})