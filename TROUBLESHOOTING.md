# Troubleshooting Guide

Common issues and solutions for the Cypress Starter Project.

## Installation Issues

### Problem: `npm install` fails

**Symptom:**
```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
```

**Solutions:**
1. Clear npm cache:
   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Use correct Node.js version:
   ```bash
   node --version  # Should be v20+
   nvm use 20      # If using nvm
   ```

3. Try legacy peer deps:
   ```bash
   npm install --legacy-peer-deps
   ```

### Problem: Cypress binary won't install

**Symptom:**
```
The Cypress App could not be downloaded.
```

**Solutions:**
1. Check network connectivity
2. Set proxy if needed:
   ```bash
   export HTTP_PROXY=http://proxy.company.com:8080
   export HTTPS_PROXY=http://proxy.company.com:8080
   npm install
   ```

3. Manual installation:
   ```bash
   npx cypress install --force
   ```

## TypeScript Issues

### Problem: TypeScript errors in tests

**Symptom:**
```
error TS2304: Cannot find name 'cy'
error TS2304: Cannot find name 'Cypress'
```

**Solutions:**
1. Add reference comment at top of file:
   ```typescript
   /// <reference types="cypress" />
   ```

2. Check tsconfig.json includes cypress types:
   ```json
   {
     "compilerOptions": {
       "types": ["cypress", "node"]
     }
   }
   ```

3. Restart your IDE/editor

### Problem: Import errors

**Symptom:**
```
error TS2307: Cannot find module '@pages/LoginPage'
```

**Solutions:**
1. Check tsconfig.json paths:
   ```json
   {
     "compilerOptions": {
       "paths": {
         "@pages/*": ["cypress/pages/*"]
       }
     }
   }
   ```

2. Use relative imports instead:
   ```typescript
   import { LoginPage } from '../../pages/LoginPage'
   ```

## ESLint Issues

### Problem: ESLint errors on startup

**Symptom:**
```
Error: Could not find config file
```

**Solutions:**
1. Check eslint.config.mjs exists
2. Install ESLint dependencies:
   ```bash
   npm install --save-dev eslint @eslint/js typescript-eslint
   ```

3. Update to ESLint 9:
   ```bash
   npm install --save-dev eslint@latest
   ```

### Problem: `cy` is not defined

**Symptom:**
```
error  'cy' is not defined  no-undef
```

**Solution:**
Add to eslint.config.mjs:
```javascript
{
  languageOptions: {
    globals: {
      cy: "readonly",
      Cypress: "readonly",
    }
  }
}
```

## Test Execution Issues

### Problem: Tests won't run

**Symptom:**
```
No specs found
```

**Solutions:**
1. Check spec pattern in cypress.config.ts:
   ```typescript
   specPattern: 'cypress/e2e/**/*.cy.{js,ts}'
   ```

2. Ensure test files have correct extension:
   - `.cy.js` or `.cy.ts`

3. Check file location:
   ```bash
   ls cypress/e2e/**/*.cy.*
   ```

### Problem: Browser doesn't launch

**Symptom:**
```
Browser 'chrome' not found
```

**Solutions:**
1. List available browsers:
   ```bash
   npx cypress info
   ```

2. Install browser if missing

3. Use different browser:
   ```bash
   npm run cypress:run:ff  # Firefox
   npm run cypress:run:electron  # Electron
   ```

### Problem: Tests timeout

**Symptom:**
```
Timed out retrying after 4000ms
```

**Solutions:**
1. Increase timeout in cypress.config.ts:
   ```typescript
   defaultCommandTimeout: 10000,
   pageLoadTimeout: 60000,
   ```

2. Or in individual test:
   ```typescript
   cy.get('#element', { timeout: 10000 })
   ```

3. Check network speed/stability

## Docker Issues

### Problem: Docker build fails

**Symptom:**
```
ERROR: failed to solve
```

**Solutions:**
1. Check Docker is running:
   ```bash
   docker ps
   ```

2. Rebuild without cache:
   ```bash
   docker-compose build --no-cache
   ```

3. Pull base image:
   ```bash
   docker pull cypress/browsers:node-20.18.1-chrome-131.0.6778.85-1-ff-133.0-edge-131.0.2903.51-1
   ```

### Problem: Container won't start

**Symptom:**
```
Error: Cannot find module 'cypress'
```

**Solutions:**
1. Rebuild containers:
   ```bash
   docker-compose down
   docker-compose up --build
   ```

2. Check Dockerfile has npm install:
   ```dockerfile
   RUN npm ci
   ```

## CI/CD Issues

### Problem: GitHub Actions fails

**Symptom:**
```
cypress-run job failed
```

**Solutions:**
1. Check workflow syntax:
   ```bash
   cat .github/workflows/ci.yml
   ```

2. Verify Node.js version in workflow:
   ```yaml
   - uses: actions/setup-node@v4
     with:
       node-version: '20'
   ```

3. Check GitHub Actions logs for details

4. Test locally:
   ```bash
   npm ci
   npm run lint
   npm run typecheck
   npm run cypress:run:chrome
   ```

### Problem: Tests pass locally but fail in CI

**Solutions:**
1. Check viewport sizes match:
   ```typescript
   cy.viewport(1280, 720)  // In tests
   ```

2. Add wait for elements:
   ```typescript
   cy.get('#element').should('be.visible')
   ```

3. Disable video in CI to save resources:
   ```typescript
   video: process.env.CI ? false : true
   ```

## Reporting Issues

### Problem: Mochawesome report not generated

**Symptom:**
```
Cannot find mochawesome JSON files
```

**Solutions:**
1. Check reporter config in cypress.config.ts:
   ```typescript
   reporter: 'mochawesome',
   reporterOptions: {
     reportDir: 'cypress/reports/mochawesome',
   }
   ```

2. Run tests first:
   ```bash
   npm run cypress:run:chrome
   npm run cypress:report
   ```

3. Check reports directory exists:
   ```bash
   ls cypress/reports/mochawesome/
   ```

### Problem: Screenshots not captured

**Symptom:**
No screenshots in `cypress/screenshots/`

**Solutions:**
1. Enable in config:
   ```typescript
   screenshotOnRunFailure: true
   ```

2. Check .gitignore doesn't exclude screenshots:
   ```
   cypress/screenshots  # Should NOT be in .gitignore for CI artifacts
   ```

## Husky/Git Hooks Issues

### Problem: Pre-commit hook fails

**Symptom:**
```
.husky/pre-commit: Permission denied
```

**Solutions:**
1. Make hook executable:
   ```bash
   chmod +x .husky/pre-commit
   ```

2. Reinstall husky:
   ```bash
   npm run prepare
   ```

### Problem: Hook takes too long

**Solutions:**
1. Reduce checks in .husky/pre-commit:
   ```bash
   #!/usr/bin/env sh
   npm run lint:fix  # Only lint, skip format check
   ```

2. Skip hooks temporarily:
   ```bash
   git commit --no-verify -m "message"
   ```

## Page Object Issues

### Problem: Page object methods not recognized

**Symptom:**
```
Property 'login' does not exist on type 'LoginPage'
```

**Solutions:**
1. Check import:
   ```typescript
   import { LoginPage } from '../../pages/LoginPage'
   ```

2. Verify method exists in class:
   ```typescript
   export class LoginPage extends BasePage {
     login(username: string, password: string) { ... }
   }
   ```

3. Restart TypeScript server in IDE

## Performance Issues

### Problem: Tests run slowly

**Solutions:**
1. Run in headless mode:
   ```bash
   npm run cypress:run:chrome  # Instead of cypress:run:headed
   ```

2. Disable video:
   ```typescript
   video: false  // In cypress.config.ts
   ```

3. Use parallel execution in CI:
   ```yaml
   strategy:
     matrix:
       containers: [1, 2, 3]
   ```

4. Optimize selectors:
   ```typescript
   cy.get('[data-testid="submit"]')  # Faster than complex CSS
   ```

## Getting Help

If you're still stuck:

1. 📚 Check [Documentation](./README.md)
2. 🔍 Search [GitHub Issues](https://github.com/charlyautomatiza/starter-cypress/issues)
3. 💬 Ask on [Discord](https://discord.gg/wwM9GwxmRZ)
4. 🐦 Tweet [@char_automatiza](http://twitter.com/char_automatiza)
5. 📺 Watch [Twitch streams](https://www.twitch.tv/charlyautomatiza)

## Reporting Bugs

Found a bug? Please report it:

1. Check [existing issues](https://github.com/charlyautomatiza/starter-cypress/issues)
2. Create [new issue](https://github.com/charlyautomatiza/starter-cypress/issues/new/choose)
3. Use the bug report template
4. Include:
   - OS and version
   - Node.js version
   - Cypress version
   - Error messages
   - Steps to reproduce

---

**Pro Tip**: When debugging, run with increased logging:

```bash
DEBUG=cypress:* npm run cypress:run:chrome
```
