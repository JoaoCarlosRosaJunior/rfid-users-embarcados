# rfid-users-embarcados
Este repositórios é o sistema backend do sistema construido para a matéria PMR3402-Sistemas Embarcados do curso de Engenharia Mecatrônica da Poli-USP.

O Sistema completo possui componentes de hardware e software que se propõe a simular o funcionamento de uma catraca. 
Um usuário é cadastro com uma tag e uma permissão, quando acessar a catraca ele passa a tag no leitor RFID, se a permissão for válida um motor será acionado
e ele poderá passar.

- ## Tecnologias utilizadas
  1. ### NodeJS com Typescript
    Utilizamos Typescript com Express para construir a API do projeto.
    Endpoints:
    - #### Criação de usuário: permite fazer a criação dos usuários com a sua respectiva tag.
      URL: https://project-rfid-embarcados.herokuapp.com
      Body: {
	       "id_tag":"A07B8C9",
	       "name":"João Carlos",
	       "permission": "all",
	       "github_link": "github.com/JoaoCarlosDaRosaJúnior",
	       "active": false
       }
    - #### Activate Tag:
      URL: https://project-rfid-embarcados.herokuapp.com/update/active
      Body: {
        "id_tag": "A07B8C9",
	      "active": false
      }
  2. ### PostgreSQL
    O banco é constituido de apenas uma tabela com as seguintes colunas:
      - id: int
      - id_tag: string
      - name: string
      - active: boolean
      - github_link: string
      - permission: string
      
    Observações: A coluna "id_tag" armazena o valor do id da tag lida pelo módulo RFID do arduino, e a coluna "github_link" armazena o link do github do usuário 
    para fazer o display de sua foto no front-end enquanto ele passa pela catraca.
    
  3. ### Heroku
    O Heroku foi utilizado para fazer deploy do banco de dados e da API
    
 - ## Código em C do arduino e do Front.
 https://github.com/igorsalbr/embarcados
 
 - Para mais detalhes do projeto basta acessar o arquivo "Sistema_embarcados.pdf"

