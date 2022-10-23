/// <reference types="cypress"/>

//Parcela recorrente da url do site
var url = "https://automacaocombatista.herokuapp.com/";

//Variável utilizada como contador no segundo teste
var i = 1;

describe("usuário", () => {
  it("deverá poder encontrar um usuário na lista de usuários", () => {
    //Acessar a página da lista de usuários
    cy.visit(url + "users");

    //Clicar no botão o qual exibe a quinta página da lista
    cy.get("[class=page]").eq(3).click();
    cy.wait(1000);

    /*Clicar nos botões os quais exibem a nona, décima terceira e
    décima setima página da lista*/
    while(i <= 3){
      cy.get("[class=page]").eq(7).click();
      cy.wait(1000);

      i++;
    }

    //Clicar no botão o qual exibe a décima oitava página da lista
    cy.get("[class=page]").eq(4).click();
  });

  it("deverá poder visualizar os dados de um usuário", () => {
    //Acessar a décima oitava página da lista de usuários
    cy.visit(url + "users?page=18");

    //Clicar no ícone o qual permite visualizar os dados de um usuário
    cy.get("[class='material-icons']").eq(27).click()
  });

  it("deverá poder editar um usuário", () => {
    //Acessar a décima oitava página da lista de usuários
    cy.visit(url + "users?page=18");

    //Clicar no ícone o qual permite editar os dados de um usuário
    cy.get("[class='material-icons']").eq(28).click();
    cy.wait(1000);

    //Apagar a informação antiga do input
    cy.get("[id=user_email]").clear();

    //Inserir uma nova informação ao input
    cy.get("[id=user_email]").type("geraldo.neto@aluno.uepb.edu.br");

    //Clicar no botão "Criar"
    cy.get("[name=commit]").click();
  });

  it("deverá poder excluir um usuário", () => {
    //Acessar a décima oitava página da lista de usuários
    cy.visit(url + "users?page=18");

    //Clicar no ícone o qual permite excluir um usuário
    cy.get("[class='material-icons']").eq(29).click();

    //Clicar no botão "OK" do popup
    cy.on("window:confirm", (t) => {
      expect(t).to.equal("Vocee está certo disso?");
    });
  });
})