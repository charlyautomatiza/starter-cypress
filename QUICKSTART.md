# Quick Start Guide

Get up and running with Cypress in 5 minutes! 🚀

## Prerequisites

Make sure you have these installed:
- Node.js v20+ ([Download](https://nodejs.org/))
- Git ([Download](https://git-scm.com/))
- A modern browser (Chrome, Firefox, or Edge)

## Installation

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/charlyautomatiza/starter-cypress.git
cd starter-cypress

# Install dependencies
npm install
```

### 2. Run Your First Test

#### Open Cypress Test Runner (Interactive)
```bash
npm run cypress:open
```

This opens the Cypress UI where you can:
- Select a browser
- Choose tests to run
- Watch tests execute in real-time

#### Run Tests in Headless Mode
```bash
npm run cypress:run:chrome
```

## What's Included

### 📁 Test Examples

1. **Page Object Model** (`cypress/e2e/1-pom-examples/`)
   - Clean, maintainable test structure
   - Reusable page objects
   - TypeScript support

2. **API Testing** (`cypress/e2e/2-api-examples/`)
   - REST API examples
   - Request/response validation
   - Error handling

3. **Accessibility** (`cypress/e2e/3-accessibility/`)
   - WCAG compliance checks
   - Automated a11y testing

4. **Visual Regression** (`cypress/e2e/4-visual-regression/`)
   - Screenshot comparison
   - UI change detection

5. **Advanced Examples** (`cypress/e2e/5-advanced-examples/`)
   - Network interception
   - Utility functions
   - Custom helpers

### 🛠️ Key Features

- **TypeScript**: Full type safety
- **Multi-browser**: Chrome, Firefox, Edge, Electron
- **CI/CD Ready**: GitHub Actions included
- **Docker Support**: Containerized execution
- **Advanced Reporting**: Beautiful HTML reports
- **Code Quality**: ESLint, Prettier, Husky

## Common Commands

```bash
# Open Cypress Test Runner
npm run cypress:open

# Run tests in different browsers
npm run cypress:run:chrome    # Chrome (headless)
npm run cypress:run:headed    # Chrome (with UI)
npm run cypress:run:ff        # Firefox
npm run cypress:run:edge      # Edge

# Run all browsers
npm run cypress:run:all-headless

# Generate HTML report
npm run cypress:report

# Code quality
npm run lint                  # Check code
npm run format                # Format code
npm run typecheck             # TypeScript check
```

## Project Structure

```
starter-cypress/
├── cypress/
│   ├── e2e/              # Your tests go here
│   ├── fixtures/         # Test data
│   ├── pages/            # Page Object Models
│   ├── support/          # Custom commands & utilities
│   └── plugins/          # Cypress plugins
├── .github/workflows/    # CI/CD pipelines
├── cypress.config.ts     # Cypress configuration
└── package.json          # Dependencies & scripts
```

## Writing Your First Test

Create a new file: `cypress/e2e/my-test.cy.ts`

```typescript
describe('My First Test', () => {
  it('visits a website', () => {
    cy.visit('https://example.com')
    cy.contains('Example Domain').should('be.visible')
  })
})
```

## Using Page Objects

```typescript
import { LoginPage } from '../../pages/LoginPage'

describe('Login Test', () => {
  it('should login successfully', () => {
    const loginPage = new LoginPage()
    loginPage
      .visit()
      .login('username', 'password')
      .verifySuccessfulLogin()
  })
})
```

## Environment Configuration

Copy `.env.example` to `.env` and customize:

```bash
cp .env.example .env
```

Edit `.env`:
```env
CYPRESS_BASE_URL=https://your-app.com
CYPRESS_ENV=staging
```

## Running in Docker

```bash
# Build and run
docker-compose up cypress

# Run specific browser
docker-compose up cypress-firefox
```

## Next Steps

1. ✅ Explore the example tests
2. ✅ Create your own page objects
3. ✅ Add custom commands in `cypress/support/commands.ts`
4. ✅ Configure for your application
5. ✅ Set up CI/CD with GitHub Actions

## Need Help?

- 📚 [Full Documentation](./README.md)
- 💬 [Discord Community](https://discord.gg/wwM9GwxmRZ)
- 🐦 [Twitter](http://twitter.com/char_automatiza)
- 📺 [Twitch](https://www.twitch.tv/charlyautomatiza)

## Resources

- [Cypress Docs](https://docs.cypress.io/)
- [TypeScript Docs](https://www.typescriptlang.org/)
- [Contributing Guide](./CONTRIBUTING.md)
- [Changelog](./CHANGELOG.md)

---

Happy Testing! 🎉
