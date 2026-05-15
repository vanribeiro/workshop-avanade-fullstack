# Frontend — Workshop Avanade Fullstack

Angular SPA for the eco-friendly product inventory manager.

## Tech Stack

- **Angular 21**
- **Angular Material** (UI components)
- **TypeScript 5.9**
- **RxJS**
- **Reactive Forms**
- **Node.js 22.22.3**

## Project Structure

```
src/app/
├── item.model.ts                      # TypeScript interfaces (Category, Item, ItemRequest)
├── item.service.ts                    # HTTP service (HttpClient)
├── item-manager/
│   ├── item-manager.component.ts      # Component logic
│   ├── item-manager.component.html    # Template
│   └── item-manager.component.css     # Styles
├── app.config.ts                      # App providers (HttpClient, Router)
├── app.routes.ts                      # Route definitions
└── app.ts                             # Root component
```

## Running

```bash
npm install
npm start
```

App available at `http://localhost:4200`.

## Features

- **Registration form** built with Reactive Forms and Angular Material components (`mat-form-field`, `mat-input`, `mat-select`)
  - Name field (text)
  - Quantity field (number)
  - Category dropdown — populated dynamically from the API, displays `categoryName` and sends `categoryId`
  - **Clear** button resets the form
  - **Save** button posts to the API, then reloads the table and clears the form
- **Items table** (`mat-table`) displaying all registered items with columns: ID, Name, Quantity, Category

## Backend Dependency

This app communicates with the Spring Boot backend running at `http://localhost:8080`. Make sure the backend is running before starting the frontend. See [backend/README.md](../backend/README.md).


To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
