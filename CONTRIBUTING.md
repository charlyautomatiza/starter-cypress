# Contributing to Cypress Starter Project

Thank you for considering contributing to this project! 🎉

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/starter-cypress.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature-name`

## Development Workflow

### Before Committing

The project uses Husky to run pre-commit hooks that check:
- Code linting (ESLint)
- Code formatting (Prettier)
- TypeScript type checking

These checks will run automatically when you commit. To run them manually:

```bash
npm run lint          # Check for linting issues
npm run lint:fix      # Fix auto-fixable issues
npm run format:check  # Check formatting
npm run format        # Fix formatting
npm run typecheck     # Check TypeScript types
```

### Running Tests

```bash
npm run cypress:open           # Open Cypress Test Runner
npm run cypress:run:chrome     # Run tests in Chrome
npm run cypress:run:ff         # Run tests in Firefox
npm run cypress:run:edge       # Run tests in Edge
```

### Writing Tests

- Place E2E tests in `cypress/e2e/`
- Use Page Object Model pattern (see `cypress/pages/`)
- Add TypeScript types for better maintainability
- Follow existing test structure and naming conventions

### Code Style

- Use TypeScript for new files
- Follow existing code patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Update tests to reflect your changes
3. Ensure all tests pass
4. Ensure code quality checks pass (lint, format, typecheck)
5. Create a Pull Request with a clear description

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Help others learn and grow

## Questions?

Feel free to open an issue or reach out to the maintainer on:
- [Twitch](https://www.twitch.tv/charlyautomatiza)
- [Discord](https://discord.gg/wwM9GwxmRZ)
- [Twitter](http://twitter.com/char_automatiza)
