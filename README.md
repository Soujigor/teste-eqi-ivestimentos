
#  Desafio Desenvolvedor Front-end Eqi Ivestimentos

O desafio era a construção de um front-end para um Simulador de Investimentos. 
No app, é permitido ao usuário simular rendimentos de acordo com o tipo de indexação e tipo de rendimento escolhido.

## Variáveis de Ambiente

Para rodar esse projeto, foi necessário mudar a port de acesso do APP

No arquivo `package.json`, foi modificado o start do script:

`"scripts": {
    "start": "set PORT=8000 && react-scripts start",
     },`


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Soujigor/eqi-ivestimentos
```

Entre no diretório do projeto

```bash
  cd eqi-investimentos
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
``` 

## Documentação

* Wireframe fornecido pelo testador (https://github.com/eqi-investimentos/desafio-frontend)
* API fornecida pelo testador (https://github.com/eqi-investimentos/desafio-fake-api))


## Stack utilizada

* [VisualCode](https://code.visualstudio.com)
* [React](https://reactjs.org)
* [Chakra UI](https://chakra-ui.com)
* [Recharts](https://recharts.org/en-US/)


## Screenshots

**Tela Inicial**
![Simulador](https://i.imgur.com/LjARS2O.png)

##
**Tela inicial com os dados preenchidos**

![Simulador_preenchido](https://i.imgur.com/ByTj47d.png)

##
**Dados inválidos**

![Simulador_erro](https://i.imgur.com/bVOOLGt.png)

##
**Exibição de dados do retorno da API**

![Simulador_resultado](https://i.imgur.com/ByTj47d.png)

##
**Exibição de Popover**

![Simulador_popover](https://i.imgur.com/GAeuVOR.png)


## Extensões do VsCode

* ESlint
* Prettier
* ES7+ React/Redux/React-Native snippets


