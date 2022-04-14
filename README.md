<p align="center">
  <a href="https://www.twitch.tv/charlyautomatiza"><img alt="Twitch" src="https://img.shields.io/badge/CharlyAutomatiza-Twitch-9146FF.svg" style="max-height: 300px;"></a>
  <a href="https://discord.gg/wwM9GwxmRZ"><img alt="Discord" src="https://img.shields.io/discord/944608800361570315" style="max-height: 300px;"></a>
  <a href="http://twitter.com/char_automatiza"><img src="https://img.shields.io/badge/@char__automatiza-Twitter-1DA1F2.svg?style=flat" style="max-height: 300px;"></a>
  <a href="https://www.youtube.com/channel/UCwEb6xrQtQCEuN_gNgi_Xfg?sub_confirmation=1"><img src="https://img.shields.io/badge/Charly%20Automatiza-Youtube-FF0000.svg" style="max-height: 300px;" style="max-height: 300px;"></a>
  <a href="https://www.linkedin.com/in/gautocarlos/"><img src="https://img.shields.io/badge/Carlos%20 Gauto-LinkedIn-0077B5.svg" style="max-height: 300px;" style="max-height: 300px;"></a>
</p>

# [![Cypress](https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png)](https://www.cypress.io)

## Starter project creado en vivo en [stream de Twitch](https://www.twitch.tv/charlyautomatiza) basado en [Cypress](https://www.cypress.io), [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) y [Node.js](https://nodejs.org/en/)

### Requerimientos generales

- Instalar [Node.js](https://nodejs.org/es/download/).
- Instalar algún cliente git como por ejemplo [git bash](https://git-scm.com/downloads).
- Tener instalada alguna versión de Chrome, Firefox o Edge.

### Instalación del framework de pruebas

#### **Clonar el repositorio:**

```bash
git clone https://github.com/charlyautomatiza/starter-cypress.git
```

#### **Instalar las dependencias.**

```bash
npm install
```

#### **Para abrir el Test Runner**

```bash
npm run cypress:open
```

#### **Para la ejecución de los test en Chrome Headless**

```bash
npm run cypress:run:chrome
```

#### **Para la ejecución de los test en Chrome Headed**

```bash
npm run cypress:run:headed
```

#### **Para la ejecución de los test en Firefox Headless**

```bash
npm run cypress:run:ff
```

#### **Para actualizar la base de datos local de browsers**

```bash
npx browserslist@latest --update-db
```

El comando anterior hay que ejecutarlo periódicamente. Para mayor información consultar la documentación oficial [Browserslist](https://github.com/browserslist/browserslist#browsers-data-updating).

### Web de ejemplo

Utilizamos como ejemplo para realizar pruebas con el framework la siguiente [web pública](https://the-internet.herokuapp.com/login).

### Créditos

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
