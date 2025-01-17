# Betsson Sports Dashboard

Este é um painel interativo de estatísticas para apostas esportivas, criado com o **Angular 17** e utilizando gráficos interativos com **echarts**. O painel é projetado para exibir métricas e dados importantes para monitoramento de apostas esportivas, com foco em visualizações claras e objetivas.

## Link para acessar a aplicação

https://betsson-sports-dashboard-34sg.vercel.app/

## Sumário

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Como Contribuir](#como-contribuir)

## Visão Geral

O painel exibe gráficos interativos para fornecer uma visão detalhada de métricas relacionadas a apostas esportivas. As visualizações incluem:

- **Visão Geral das Apostas Mensais**
- **Distribuição das Apostas**
- **Crescimento de Usuários ao Longo do Tempo**
- **Top Países de Apostas**
- **Quebra de Esportes Populares**

Esses gráficos são alimentados com dados mockados e são exibidos de maneira interativa usando **echarts** para facilitar a análise de dados.

## Funcionalidades

- **Visualizações interativas**: O painel inclui vários gráficos para análise de dados.
- **Responsividade**: A interface do painel se adapta automaticamente a diferentes tamanhos de tela (desktops, tablets e celulares).
- **Cartões de gráficos**: Cada gráfico é apresentado em um cartão com elevação para um visual limpo e moderno.
- **Futuras melhorias**: O painel está pronto para ser integrado com dados reais por meio de uma API RESTful, permitindo uma atualização dinâmica das métricas.

## Tecnologias Utilizadas

- **Angular 17**: Framework front-end utilizado para criar a aplicação SPA (Single Page Application).
- **echarts**: Biblioteca para gráficos interativos.
- **SCSS**: Pré-processador CSS para um design mais flexível e modular.
- **RxJS**: Para lidar com programação reativa e fluxo de dados assíncronos.

## Estrutura do Projeto

A estrutura do projeto segue os princípios de modularidade e boa organização de código. Abaixo está a estrutura de diretórios principal:

### Componentes

- **Header**: Exibe o cabeçalho com o título e navegação.
- **Stats**: Contém os gráficos de estatísticas e a lógica para exibição de dados.
- **AppComponent**: Componente principal que organiza as diferentes páginas do painel.

## Como Rodar o Projeto

### Pré-requisitos

1. Certifique-se de que você tem o [Node.js](https://nodejs.org/) instalado em sua máquina. É recomendável usar a versão LTS (Long Term Support).
2. Instale o Angular CLI globalmente, caso ainda não tenha:
   ```bash
   npm install -g @angular/cli
   ```

### Instalação

## Clone o repositório:

git clone https://github.com/seu-usuario/betsson-sports-dashboard.git

## Acesse a pasta do projeto:

cd betsson-sports-dashboard

## Instale as dependências:

npm install

## Rodando o Projeto

Para rodar o projeto localmente, use o comando abaixo:

ng serve

## A aplicação estará disponível em:

http://localhost:4200.
