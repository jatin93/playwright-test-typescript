# playwright-test-typescript [![Playwright Tests](https://github.com/jatin93/playwright-test-typescript/actions/workflows/playwright.yml/badge.svg)](https://github.com/jatin93/playwright-test-typescript/actions/workflows/playwright.yml)

## How to install

### Run from your project's root directory

```
npm init playwright@latest
```

## How To : 

### How to Run tests

```
npm run test:realWorld
```

### How to enable inbuilt reporter

```
reporter: [["html", { outputFolder: "test-report" }]],
```

### How to intercept & wait for Api

```ts
await page.waitForResponse(
  (response) =>
    response.url().includes("https://api.realworld.io/api/articles") &&
    response.status() === 200
);
```

### How to enable screenshots on failure

```ts
use:{ screenshot: "only-on-failure" }
```

### How to debug tests

```
npx playwright test --debug
```

### How to enable disable headless mode

```ts
use: {
  headless: false;
}
```

### How to create a locator property in page classes
```ts
protected get signInBtn(): Locator {
    return this.page.locator('button:has-text("Sign in")');
  }
```
