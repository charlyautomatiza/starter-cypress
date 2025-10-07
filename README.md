<p align="center">
  <a href="https://www.twitch.tv/charlyautomatiza"><img alt="Twitch" src="https://img.shields.io/badge/CharlyAutomatiza-Twitch-9146FF.svg" style="max-height: 300px;"></a>
  <a href="https://discord.gg/wwM9GwxmRZ"><img alt="Discord" src="https://img.shields.io/discord/944608800361570315" style="max-height: 300px;"></a>
  <a href="http://twitter.com/char_automatiza"><img src="https://img.shields.io/badge/@char__automatiza-Twitter-1DA1F2.svg?style=flat" style="max-height: 300px;"></a>
  <a href="https://www.youtube.com/channel/UCwEb6xrQtQCEuN_gNgi_Xfg?sub_confirmation=1"><img src="https://img.shields.io/badge/Charly%20Automatiza-Youtube-FF0000.svg" style="max-height: 300px;" style="max-height: 300px;"></a>
  <a href="https://www.linkedin.com/in/gautocarlos/"><img src="https://img.shields.io/badge/Carlos%20 Gauto-LinkedIn-0077B5.svg" style="max-height: 300px;" style="max-height: 300px;"></a>
</p>

<br>

# [![Cypress](https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png)](https://www.cypress.io)

## Modern Cypress Starter Project v2.0

### 🚀 Comprehensive test automation framework with TypeScript, advanced reporting, CI/CD, and modern best practices

Originally created live on [Twitch stream](https://www.twitch.tv/charlyautomatiza), now upgraded to include:

- ✅ **Cypress 15.3.0** - Latest stable version
- ✅ **TypeScript Support** - Type-safe tests and configurations
- ✅ **Page Object Model** - Structured and maintainable test architecture
- ✅ **Multi-browser Testing** - Chrome, Firefox, Edge, and Electron
- ✅ **API Testing** - Built-in examples with cy.request()
- ✅ **Accessibility Testing** - WCAG compliance with cypress-axe
- ✅ **Visual Regression** - Screenshot comparison testing
- ✅ **Advanced Reporting** - Mochawesome HTML reports
- ✅ **CI/CD Ready** - GitHub Actions workflows included
- ✅ **Docker Support** - Containerized test execution
- ✅ **Code Quality** - ESLint, Prettier, and Husky pre-commit hooks

---

## 📋 Requirements

- [Node.js](https://nodejs.org/) v20+ (LTS recommended)
- [Git](https://git-scm.com/downloads)
- Modern browser: Chrome, Firefox, or Edge

---

## 🔧 Installation

### 1. Clone the repository

```bash
git clone https://github.com/charlyautomatiza/starter-cypress.git
cd starter-cypress
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment (optional)

Copy the example environment file and customize it:

```bash
cp .env.example .env
```

---

## 🎯 Usage

### Open Cypress Test Runner (Interactive Mode)

```bash
npm run cypress:open
```

### Run tests in different browsers

#### Chrome (Headless)
```bash
npm run cypress:run:chrome
```

#### Chrome (Headed - with UI)
```bash
npm run cypress:run:headed
```

#### Firefox (Headless)
```bash
npm run cypress:run:ff
```

#### Edge (Headless)
```bash
npm run cypress:run:edge
```

#### Electron (Headless)
```bash
npm run cypress:run:electron
```

#### All browsers (Sequential)
```bash
npm run cypress:run:all-headless
```

---

## 📊 Reporting

### Generate Mochawesome HTML Report

After running tests, generate a consolidated HTML report:

```bash
npm run cypress:report
```

The report will be available at `mochawesome-report/index.html`

---

## 🧪 Test Types & Examples

### E2E Tests with Page Object Model
Located in `cypress/e2e/1-pom-examples/`
- Structured page classes
- Reusable methods
- Type-safe selectors

### API Testing
Located in `cypress/e2e/2-api-examples/`
- GET, POST, PUT, DELETE requests
- Response validation
- Error handling

### Accessibility Testing
Located in `cypress/e2e/3-accessibility/`
- WCAG 2.0/2.1 compliance checks
- Element-specific tests
- Multi-page audits

### Visual Regression Testing
Located in `cypress/e2e/4-visual-regression/`
- Screenshot comparison
- Multi-viewport testing
- Baseline management

---

## 🔄 Code Quality

### Linting

```bash
npm run lint          # Check for issues
npm run lint:fix      # Auto-fix issues
```

### Formatting

```bash
npm run format        # Format all files
npm run format:check  # Check formatting
```

### Type Checking

```bash
npm run typecheck
```

---

## 🐳 Docker Support

### Build and run tests in Docker

```bash
# Build the image
docker build -t cypress-tests .

# Run tests
docker-compose up cypress

# Run on specific browser
docker-compose up cypress-firefox
docker-compose up cypress-edge
```

---

## 🔄 CI/CD Integration

### GitHub Actions

The project includes a comprehensive CI/CD workflow at `.github/workflows/ci.yml`:

- ✅ Code quality checks (ESLint, Prettier, TypeScript)
- ✅ Parallel test execution
- ✅ Multi-browser testing (Chrome, Firefox, Edge)
- ✅ Artifact uploads (screenshots, videos, reports)
- ✅ Caching for faster builds

### Cypress Dashboard (Optional)

To enable Cypress Dashboard recording:

1. Sign up at [Cypress Dashboard](https://dashboard.cypress.io/)
2. Get your project's Record Key
3. Set it as a GitHub Secret: `CYPRESS_RECORD_KEY`
4. Update `cypress.config.ts` with your project ID

---

## 📁 Project Structure

```
starter-cypress/
├── cypress/
│   ├── e2e/                    # Test specs
│   │   ├── 0-internet-guinea/  # Original examples
│   │   ├── 1-pom-examples/     # Page Object Model tests
│   │   ├── 2-api-examples/     # API testing
│   │   ├── 3-accessibility/    # A11y tests
│   │   └── 4-visual-regression/ # Visual tests
│   ├── fixtures/               # Test data
│   ├── pages/                  # Page Object Models
│   ├── plugins/                # Cypress plugins
│   └── support/                # Custom commands & config
├── scripts/                    # Utility scripts
├── .github/workflows/          # CI/CD workflows
├── cypress.config.ts           # Cypress configuration
├── tsconfig.json              # TypeScript configuration
├── eslint.config.mjs          # ESLint configuration
├── .prettierrc                # Prettier configuration
├── Dockerfile                 # Docker configuration
├── docker-compose.yml         # Docker Compose setup
└── package.json               # Dependencies & scripts
```

---

## 🛠️ Maintenance

### Update Cypress

```bash
npm run cypress:update
```

### Update browser compatibility database

```bash
npm run browsers:update
```

This command should be run periodically. See [Browserslist documentation](https://github.com/browserslist/browserslist#browsers-data-updating) for details.

---

## 📚 Additional Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [cypress-axe Documentation](https://github.com/component-driven/cypress-axe)
- [Mochawesome Documentation](https://github.com/adamgruber/mochawesome)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

ISC

---

## 🙏 Credits

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

Created by [CharlyAutomatiza](https://linktr.ee/charlyautomatiza)
