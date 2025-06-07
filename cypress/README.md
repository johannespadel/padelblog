# Cypress E2E Testing

This directory contains end-to-end tests for the Johannes Padel blog using Cypress.

## Test Structure

- `e2e/homepage.cy.ts` - Tests for the homepage functionality
- `e2e/blog-posts.cy.ts` - Tests for blog post listing and individual post pages
- `e2e/navigation.cy.ts` - Tests for navigation and routing
- `support/commands.ts` - Custom Cypress commands
- `support/e2e.ts` - Test configuration and setup

## Running Tests

### Interactive Mode (Cypress Test Runner)
```bash
# Open Cypress Test Runner (requires dev server to be running)
npm run cypress:open

# Start dev server and open Cypress Test Runner
npm run cypress:dev
```

### Headless Mode (CI/CD)
```bash
# Run all tests headless (requires dev server to be running)
npm run cypress:run

# Start dev server and run tests headless
npm run test:e2e

# Run all tests (alias for test:e2e)
npm run test
```

## Test Coverage

The tests cover:

- ✅ Homepage hero section and layout
- ✅ Blog post listing and cards
- ✅ Individual blog post pages
- ✅ Navigation between pages
- ✅ Responsive design across device sizes
- ✅ Accessibility features
- ✅ External link handling
- ✅ Empty state handling
- ✅ 404 error handling

## Custom Commands

- `cy.visitHomePage()` - Visit homepage and wait for it to load
- `cy.checkNavigation()` - Verify navigation elements are present
- `cy.checkResponsiveDesign()` - Test responsive design at different breakpoints

## Configuration

Cypress configuration is in `cypress.config.ts` in the project root.

### Key Settings:
- Base URL: `http://localhost:3000`
- Viewport: 1280x720 (desktop)
- Video recording: Disabled
- Screenshots on failure: Enabled

## Writing New Tests

When adding new tests:

1. Use semantic selectors (data-testid, semantic HTML)
2. Test user flows, not implementation details
3. Include responsive design checks
4. Verify accessibility features
5. Handle loading states and async operations

## Continuous Integration

Tests can be run in CI/CD pipelines using:

```bash
npm run test:e2e
```

This command will start the Next.js dev server, wait for it to be ready, run all Cypress tests, and then shut down the server.