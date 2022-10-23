/// <reference types="cypress"/>

//Parcela recorrente da url do site
var url = "https://automacaocombatista.herokuapp.com/";

describe("usuário", () => {
  it("deverá poder criar um usuário", () => {
    //Acessar a página de criação de usuário
    cy.visit(url + "users/new");

    //Inserir valores a cada input
    cy.get("[id=user_name]").type("Geraldo");
    cy.get("[id=user_lastname]").type("Pereira Neto");
    cy.get("[id=user_email]").type("geraldo2799@gmail.com");
    cy.get("[id=user_address]").type("Sítio Trapiá");
    cy.get("[id=user_university]").type("Universidade Estadual da Paraíba");
    cy.get("[id=user_profile]").type("Estudante");
    cy.get("[id=user_gender]").type("Masculino");
    cy.get("[id=user_age]").type("23");

    //Clicar no botão "Criar"
    cy.get("[name=commit]").click();
  });
})