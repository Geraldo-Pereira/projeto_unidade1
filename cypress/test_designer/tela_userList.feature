Funcionalidade: Encontrar usuário na lista de usuários

  Cenario: Deverá poder encontrar um usuário na lista de usuários
  Dado que ao criar um usuário, o mesmo encontra-se na lista de usuários
  Entao é necessário navegar até a página da lista a qual contém 
        o usuário procurado

Funcionalidade: Visualizar dados do usuário

  Cenario: Deverá poder visualizar os dados de um usuário
  Dado que ao encontrar o usuário procurado na lista de usuários 
       é possível visualizar seus dados
  Entao é necessário clicar no ícone de lupa presente na coluna "Ações"
  Entao é exibido os todos os dados do usuário

Funcionalidade: Editar usuário

  Cenario: Deverá poder editar um usuário
  Dado que ao criar um usuário
  E encontrá-lo na lista de usuários é possível editá-lo
  Entao é necessário clicar no ícone de lápis presente na coluna "Ações"
  E alterar um dos dados
  Entao clicar no botão "Criar"
  Entao um dos dados do usuário exibidos na lista de usuários é alterado

Funcionalidade: Excluir usuário

  Cenario: Deverá poder excluir um usuário
  Dado que ao criar um usuário
  E encontrá-lo na lista de usuários é possível excluí-lo
  Entao é necessário clicar no ícone de lixeira presente na coluna "Ações"
  E clicar no botão "OK" presente em um popup
  Entao o usuário deixa de ser exibido na lista de usuários