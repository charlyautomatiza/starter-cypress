# Migration Guide: v1.0 to v2.0

This guide helps you migrate from Cypress v10.0.2 to v15.3.0 with all the new features.

## Breaking Changes

### 1. Cypress Version
- **Old**: Cypress 10.0.2
- **New**: Cypress 15.3.0

### 2. Configuration File
- **Old**: `cypress.config.js` (JavaScript)
- **New**: `cypress.config.ts` (TypeScript)

### 3. Test Files
- **Old**: `.js` files only
- **New**: Both `.js` and `.ts` supported (TypeScript recommended)

### 4. Support Files
- **Old**: `cypress/support/index.js`
- **New**: `cypress/support/e2e.ts`

## Migration Steps

### Step 1: Update Dependencies

```bash
# Remove old node_modules
rm -rf node_modules package-lock.json

# Install new dependencies
npm install
```

### Step 2: Update Configuration

If you have custom configuration in `cypress.config.js`, migrate it to `cypress.config.ts`:

**Old (cypress.config.js):**
```javascript
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
})
```

**New (cypress.config.ts):**
```typescript
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:3000',
  },
});
```

### Step 3: Convert Tests to TypeScript (Optional but Recommended)

**Old (.js):**
```javascript
describe('Login Test', () => {
  it('should login', () => {
    cy.visit('/login')
    cy.get('#username').type('user')
    cy.get('#password').type('pass')
    cy.get('button').click()
  })
})
```

**New (.ts with Page Object):**
```typescript
import { LoginPage } from '../../pages/LoginPage'

describe('Login Test', () => {
  it('should login', () => {
    const loginPage = new LoginPage()
    loginPage.visit().login('user', 'pass')
  })
})
```

### Step 4: Update Custom Commands

**Old (commands.js):**
```javascript
Cypress.Commands.add('login', (username, password) => {
  cy.get('#username').type(username)
  cy.get('#password').type(password)
  cy.get('button').click()
})
```

**New (commands.ts):**
```typescript
declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>
    }
  }
}

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.get('#username').type(username)
  cy.get('#password').type(password)
  cy.get('button').click()
})
```

### Step 5: Update npm Scripts

Your old scripts still work! But we've added new ones:

```json
{
  "scripts": {
    "cypress:run:edge": "cypress run --browser edge",
    "cypress:run:electron": "cypress run --browser electron",
    "cypress:run:all-headless": "npm run cypress:run:chrome && npm run cypress:run:ff && npm run cypress:run:edge",
    "cypress:report": "node ./scripts/generate-report.js",
    "lint": "eslint . --ext .js,.ts",
    "format": "prettier --write \"**/*.{js,ts,json,md}\"",
    "typecheck": "tsc --noEmit"
  }
}
```

## New Features You Can Use

### 1. Page Object Model

Create reusable page classes:

```typescript
// cypress/pages/MyPage.ts
import { BasePage } from './BasePage'

export class MyPage extends BasePage {
  constructor() {
    super('/my-page')
  }

  clickButton() {
    cy.get('#myButton').click()
    return this
  }
}
```

### 2. API Testing

```typescript
describe('API Tests', () => {
  it('should fetch data', () => {
    cy.request('GET', 'https://api.example.com/data')
      .its('status')
      .should('eq', 200)
  })
})
```

### 3. Accessibility Testing

```typescript
describe('Accessibility', () => {
  it('should have no violations', () => {
    cy.visit('/page')
    cy.injectAxe()
    cy.checkA11y()
  })
})
```

### 4. Visual Regression

```typescript
describe('Visual Tests', () => {
  it('should match snapshot', () => {
    cy.visit('/page')
    cy.matchImageSnapshot('page-snapshot')
  })
})
```

### 5. Environment Variables

Create a `.env` file:

```env
CYPRESS_BASE_URL=https://your-app.com
CYPRESS_ENV=staging
```

Access in tests:
```typescript
const baseUrl = Cypress.env('baseUrl')
```

### 6. Advanced Reporting

Generate beautiful HTML reports:

```bash
npm run cypress:run:chrome
npm run cypress:report
```

Open `mochawesome-report/index.html` in your browser.

### 7. Docker Support

```bash
# Run tests in Docker
docker-compose up cypress

# Run on specific browser
docker-compose up cypress-firefox
```

### 8. CI/CD with GitHub Actions

The `.github/workflows/ci.yml` file is automatically configured. Just push to GitHub!

## Troubleshooting

### TypeScript Errors

If you see TypeScript errors:

```bash
npm run typecheck
```

Fix issues or add `// @ts-ignore` for complex cases.

### ESLint Errors

```bash
npm run lint:fix
```

### Old JavaScript Tests

JavaScript tests (`.js`) still work! No need to convert immediately.

### Missing Dependencies

```bash
npm install
```

### Cypress Cache Issues

```bash
npx cypress cache clear
npx cypress install
```

## Compatibility

- **Node.js**: v20+ required (v18 might work)
- **Browsers**: Chrome 90+, Firefox 90+, Edge 90+
- **Operating Systems**: Windows, macOS, Linux

## Getting Help

- 📚 [Full Documentation](./README.md)
- 💬 [Discord](https://discord.gg/wwM9GwxmRZ)
- 🐦 [Twitter](http://twitter.com/char_automatiza)
- 📺 [Twitch](https://www.twitch.tv/charlyautomatiza)

## Rollback (if needed)

If you need to rollback to v1.0:

```bash
git checkout v1.0
npm install
```

---

**Pro Tip**: Migrate one test file at a time to TypeScript and Page Objects. This allows you to learn gradually while keeping existing tests working.
