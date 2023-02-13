# Casa de Câmbio

O projeto da casa de câmbio é uma aplicação que busca a conversão da taxa de uma moeda para diversas outras.
O protótipo da aplicação está [nesse link](https://www.figma.com/file/H3gBEiF0F94VESCGx9DD17/Casa-de-C%C3%A2mbio?node-id=0%3A1).

## Requisitos

### 1. Ambiente do Projeto
- [ :white_check_mark: ] Criar um repositório do zero ou fazer um fork desse repositório (fique à vontade para fazer PRs quando terminar o desenvolvimento).
- [ :white_check_mark: ] Iniciar projeto com NPM.
- [ :white_check_mark: ] Estruturar o projeto para usar ESModules (usar `type` como `module` no `package.json` e nas tags `script`).
- [ :white_check_mark: ] Instalar Vite como Dev Tool e `npm run dev`.

### 2. Estrutura da Aplicação
- [ :white_check_mark: ] Estruturar o HTML de acordo com [protótipo](https://www.figma.com/file/H3gBEiF0F94VESCGx9DD17/Casa-de-C%C3%A2mbio?node-id=0%3A1).
- [ :white_check_mark: ] Criar tags semânticas no HTML.

### 3. Interação com API
- [ :white_check_mark: ] O endpoint da API que deverá ser usada é `https://api.exchangerate.host/latest?base=${moeda}`. 
- [ :white_check_mark: ] A moeda a ser pesquisada deverá ser passada como o parâmetro `moeda` do _endpoint_.
- [ :white_check_mark: ] Todas as moedas deverão ser listadas na tela.
> [Link da documentação da API](https://exchangerate.host/#/docs) caso necessário

### 4. Tratamento de Erro
- [ :white_check_mark: ] Você deve usar o [Sweet Alert 2](https://sweetalert2.github.io/) para as mensagens de Erro.
- [ :white_check_mark: ] Um erro deverá aparecer quando nenhuma moeda é passada.
- [ :white_check_mark: ] Um erro deverá aparecer quando uma moeda inexistente é passada.

### 5. Estilização (Bônus)
- [ :white_check_mark: ] Implementação do [protótipo de alta fidelidade](https://www.figma.com/file/H3gBEiF0F94VESCGx9DD17/Casa-de-C%C3%A2mbio?node-id=0%3A1)
