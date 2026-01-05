# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Angular 20.3 application using standalone components architecture (no NgModules). The application uses SCSS for styling and has test file generation disabled project-wide.

## Key Commands

### Development
```bash
npm start           # Start dev server at http://localhost:4200/
ng serve           # Alternative to npm start
```

### Build
```bash
npm run build      # Production build (outputs to dist/)
npm run watch      # Development build with watch mode
ng build           # Direct Angular CLI build
```

### Testing
```bash
npm test           # Run unit tests with Karma
ng test            # Alternative test command
```

### Code Generation
```bash
ng generate component component-name    # Generate new component
ng generate service service-name        # Generate new service
ng generate --help                      # List all available schematics
```

## Architecture

### Standalone Components
This project uses Angular's standalone component architecture (Angular 14+):
- No `NgModule` declarations
- Components use `imports` array directly in `@Component` decorator
- Bootstrap happens via `bootstrapApplication()` in `src/main.ts:5`

### Application Bootstrap
- Entry point: `src/main.ts`
- Root component: `App` (defined in `src/app/app.ts`)
- Application configuration: `src/app/app.config.ts` (providers are configured here)

### Styling
- Global styles: `src/styles.scss`
- Component styles: Individual `.scss` files (e.g., `src/app/app.scss`)
- Style language: SCSS (configured in `angular.json:14`)

### Code Generation Configuration
All Angular schematics are configured to skip test file generation (`angular.json:13-37`):
- Components, services, directives, pipes, guards, interceptors, and resolvers will NOT generate `.spec.ts` files
- This is a project-wide convention

### Prettier Configuration
Prettier is configured in `package.json:11-22`:
- Print width: 100 characters
- Single quotes enabled
- Angular parser for HTML files

### Bundle Size Limits
Production build budgets (`angular.json:64-75`):
- Initial bundle: 500kB warning, 1MB error
- Component styles: 4kB warning, 8kB error

coding.mdの内容を実装したときはcoding.log.mdにログとして追加して残す。
- 実行した日時
- coding.mdの内容
簡潔に記載してください。