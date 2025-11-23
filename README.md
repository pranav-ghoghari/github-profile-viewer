# GithubProfileViewer

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.0.

## GitHub API access

The application requires a GitHub personal access token because it calls both the REST and GraphQL APIs.  
Create a classic token with the `public_repo` scope and expose it through a `.env` file or build environment variable.

`npm start`, `npm run build`, `npm run test`, and `npm run watch` automatically run `scripts/generate-env.mjs`, which copies one of the following variables into `src/environments/environment.generated.ts`:

- `NG_APP_GITHUB_TOKEN`
- `githubToken`
- `GITHUB_TOKEN`

Because the generated file is gitignored, the token never lands in your repository, yet Angular still gets a concrete string during bundling.

- **Local development**: create a `.env` file at the project root and add one of the variables listed above (e.g. `NG_APP_GITHUB_TOKEN=your-token`).
- **Vercel / CI**: define the same variable in the project settings so builds have access to it.

## Development server

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

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

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
