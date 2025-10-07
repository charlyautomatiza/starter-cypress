# Project Structure

```
starter-cypress/
│
├── 📁 .github/                          # GitHub configuration
│   ├── 📁 ISSUE_TEMPLATE/
│   │   ├── bug_report.md               # Bug report template
│   │   └── feature_request.md          # Feature request template
│   ├── 📁 workflows/
│   │   └── ci.yml                      # CI/CD pipeline (GitHub Actions)
│   └── PULL_REQUEST_TEMPLATE.md        # PR template
│
├── 📁 .husky/                           # Git hooks
│   └── pre-commit                       # Pre-commit hook (lint, format, typecheck)
│
├── 📁 .vscode/                          # VS Code configuration
│   ├── extensions.json                  # Recommended extensions
│   └── settings.json                    # Workspace settings
│
├── 📁 cypress/                          # Cypress test framework
│   │
│   ├── 📁 e2e/                          # End-to-end test specs
│   │   ├── 📁 0-internet-guinea/        # Original examples (JavaScript)
│   │   │   └── login.cy.js
│   │   │
│   │   ├── 📁 1-pom-examples/           # Page Object Model examples
│   │   │   ├── login-pom.cy.ts         # Login with POM
│   │   │   └── data-driven.cy.ts       # Data-driven testing
│   │   │
│   │   ├── 📁 2-api-examples/           # API testing examples
│   │   │   └── api-tests.cy.ts         # REST API tests
│   │   │
│   │   ├── 📁 3-accessibility/          # Accessibility testing
│   │   │   └── a11y-tests.cy.ts        # WCAG compliance tests
│   │   │
│   │   ├── 📁 4-visual-regression/      # Visual regression testing
│   │   │   └── visual-tests.cy.ts      # Screenshot comparison
│   │   │
│   │   └── 📁 5-advanced-examples/      # Advanced concepts
│   │       ├── network-interception.cy.ts  # Network mocking
│   │       └── utility-usage.cy.ts      # Using utility functions
│   │
│   ├── 📁 fixtures/                     # Test data
│   │   ├── environments.json            # Environment configs
│   │   ├── testData.json               # Generic test data
│   │   ├── userBadData.json            # Invalid user data
│   │   └── userData.json               # Valid user data
│   │
│   ├── 📁 pages/                        # Page Object Models
│   │   ├── BasePage.ts                 # Base page class
│   │   ├── LoginPage.ts                # Login page object
│   │   └── index.ts                    # Page exports
│   │
│   ├── 📁 plugins/                      # Cypress plugins
│   │   └── index.js                    # Plugin configuration
│   │
│   └── 📁 support/                      # Support files
│       ├── commands.ts                  # Custom Cypress commands
│       ├── e2e.ts                      # Global test setup
│       └── 📁 utils/                    # Utility functions
│           ├── api-helpers.ts          # API utilities
│           ├── helpers.ts              # General utilities
│           └── index.ts                # Utils exports
│
├── 📁 scripts/                          # Utility scripts
│   └── generate-report.js              # Mochawesome report generator
│
├── 📄 Configuration Files
│   ├── .env.example                    # Environment variables template
│   ├── .gitignore                      # Git ignore rules
│   ├── .prettierignore                 # Prettier ignore rules
│   ├── .prettierrc                     # Prettier configuration
│   ├── cypress.config.ts               # Cypress configuration (TypeScript)
│   ├── cypress.env.json.example        # Cypress env example
│   ├── docker-compose.yml              # Docker Compose config
│   ├── Dockerfile                      # Docker image definition
│   ├── eslint.config.mjs              # ESLint configuration
│   ├── package.json                    # npm dependencies & scripts
│   ├── package-lock.json               # npm lock file
│   └── tsconfig.json                   # TypeScript configuration
│
├── 📚 Documentation
│   ├── CHANGELOG.md                    # Version history
│   ├── CONTRIBUTING.md                 # Contribution guidelines
│   ├── LICENSE                         # License file
│   ├── MIGRATION.md                    # v1.0 to v2.0 migration guide
│   ├── QUICKSTART.md                   # Quick start guide
│   ├── README.md                       # Main documentation
│   └── UPGRADE_SUMMARY.md              # Detailed upgrade summary
│
└── 📦 Generated/Runtime Files (gitignored)
    ├── node_modules/                   # npm dependencies
    ├── cypress/downloads/              # Downloaded files during tests
    ├── cypress/screenshots/            # Test failure screenshots
    ├── cypress/videos/                 # Test execution videos
    ├── cypress/reports/                # Mochawesome JSON reports
    └── mochawesome-report/             # Final HTML reports
```

## Key Directories

### 🧪 Test Files (`/cypress/e2e/`)
Organized by test type for easy navigation:
- **0-internet-guinea**: Original JavaScript examples (backward compatibility)
- **1-pom-examples**: Page Object Model patterns with TypeScript
- **2-api-examples**: API testing with cy.request()
- **3-accessibility**: WCAG compliance with cypress-axe
- **4-visual-regression**: Screenshot comparison testing
- **5-advanced-examples**: Network mocking, utilities, etc.

### 🏗️ Page Objects (`/cypress/pages/`)
Reusable page classes following POM pattern:
- **BasePage**: Common functionality for all pages
- **LoginPage**: Example implementation
- **index.ts**: Convenient exports

### 🛠️ Support (`/cypress/support/`)
Custom commands and utilities:
- **commands.ts**: Custom Cypress commands
- **e2e.ts**: Global hooks and setup
- **utils/**: Helper functions for tests and API calls

### 📊 Fixtures (`/cypress/fixtures/`)
Test data in JSON format:
- Environment-specific configurations
- Valid/invalid user credentials
- Reusable test data

### ⚙️ Configuration
Multiple config files for different tools:
- **cypress.config.ts**: Main Cypress setup
- **tsconfig.json**: TypeScript compiler options
- **eslint.config.mjs**: Linting rules
- **.prettierrc**: Code formatting rules
- **docker-compose.yml**: Container orchestration

### 📝 Documentation
Comprehensive guides for all users:
- **README.md**: Complete project documentation
- **QUICKSTART.md**: Get started in 5 minutes
- **MIGRATION.md**: Upgrade from v1.0
- **CONTRIBUTING.md**: How to contribute
- **CHANGELOG.md**: What's changed
- **UPGRADE_SUMMARY.md**: Detailed upgrade info

### 🔧 DevOps (`/.github/workflows/`)
CI/CD pipelines:
- **ci.yml**: GitHub Actions workflow
  - Multi-browser testing
  - Parallel execution
  - Code quality checks
  - Artifact uploads

## File Naming Conventions

- **Test files**: `*.cy.ts` or `*.cy.js`
- **Page objects**: `*Page.ts`
- **Utilities**: `*-helpers.ts` or `helpers.ts`
- **Config files**: `*.config.ts` or `*.config.js`
- **Documentation**: `*.md` (Markdown)

## Quick Navigation

### Want to write tests?
→ Start in `/cypress/e2e/`

### Need page objects?
→ Look in `/cypress/pages/`

### Need utilities?
→ Check `/cypress/support/utils/`

### Need test data?
→ Use `/cypress/fixtures/`

### Setting up CI/CD?
→ Edit `/.github/workflows/ci.yml`

### Configuring Cypress?
→ Modify `/cypress.config.ts`

### Documentation?
→ All `.md` files in root

---

**Total Structure**: 50+ files organized for clarity, maintainability, and scalability.
