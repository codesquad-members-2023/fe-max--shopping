# fe-max--shopping

## Table of Contents

- [Getting Started](#getting-started)
- [Project Requirements](#project-requirements)
  - [About](#about)
  - [Key Features](#key-features)
- [Dev Log](#dev-log)
  - [Web Components and SCSS](#web-components-and-scss)
  - [SCSS Modules - `@use` vs `@import`](#scss-modules---use-vs-import)
  - [Elements that are not Suitable for Attaching the Shadow DOM](#elements-that-are-not-suitable-for-attaching-the-shadow-dom)
  - [Dimmed Layer](#dimmed-layer)

## Getting Started

1. Clone the repository
   ```zsh
   git clone https://github.com/Kakamotobi/fe-max--shopping.git
   ```
2. Install dependencies
   ```zsh
   npm install
   ```
3. Run the development server
   ```zsh
   npm run dev
   ```

## Project Requirements

### About

- Amazon mainpage clone.

### Key Features

- [ ] Top Nav Bar
  - [ ] Login Section
    - [x] Login "tooltip"
      - [x] Appears after 1 second after page load
    - [x] Login Section Hover
      - [x] Login "tooltip" disappears
      - [x] Login modal appears
      - [x] Close modal when no longer hovering over the section or modal.
      - [ ] Dim main section.
  - [ ] Shipping Section Hover
    - [x] Shipping address modal appears
    - [x] Close modal when no longer hovering over the section or modal.
    - [ ] Dim main section.
  - [x] Navbar expands the whole width of the viewport
    - [x] Search bar grows when vw >= 1120px.
  - []

## Dev Log

### Web Components and SCSS

- SCSS cannot be naturally hooked into Web Components.

#### Approach 1

- **Compile SCSS files into CSS (using dart-sass compiler) and fetch it as text in JS. Then, insert that CSS string into the Web Component.**
- Example

  ```zsh
  sass index.scss:build/css/index.css
  ```

  ```js
  const cssString = await (await fetch("build/styles/index.css")).text();

  const template = document.createElement("template");
  const style = document.createElement("style");

  template.innerHTML = `
    <div>
      <p>Hello!</p>
    </div>
  `;
  style.textContent = cssString;

  export default class TestComponent extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.append(template.content.cloneNode(true), style);
    }
  }

  customElements.define("test-component", TestComponent);
  ```

- Although the overhead is minimal since it is fetched from my own server (relatively cheap), it is still a request/response cycle.
  - However, it is acceptable since the request is only sent once for each corresponding component (i.e. no need to fetch every time the component is generated).

#### Approach 2

- **Use SASS' JavaScript API.**
- Example 1 - `compile`
  ```js
  const sass = require("sass");
  const cssString = sass.compile("./index.scss").css;
  ```
- Example 2 - `compileString`
  ```js
  const sass = require("sass");
  const sassString = `
    div {
      p {
        color: blue;
      }
    }
  `;
  const cssString = sass.compileString(sassString).css;
  ```
  - No formatter --> Prone to runtime errors.
- **Problem:** the "sass" library only supports CommonJS.
  - Need a way to use ESModules instead of Commonjs.
    - Transpile the whole "sass" library to ESModules?
      - Check "sass-loader" source code?
    - Simpler and better to use a module bundler.

### SCSS Modules - `@use` vs `@import`

- **`@import` makes variables, mixins, etc. globally accessible.**

  - `@import` is discouraged as it will eventually be removed.

  ```scss
  // index.scss

  @import "./_variables.scss";
  @import "./otherfile.scss";
  ```

  ```scss
  // _variables.scss

  $color-blue: "blue";
  ```

  ```scss
  // otherfile.scss

  p {
    color: $color-blue;
  }
  ```

- **`@use` makes variables, mixins, etc. only available within the scope of the current file (i.e. not globally accessible).**

  ```scss
  // index.scss

  @use "./otherfile.scss";
  ```

  ```scss
  // _variables.scss

  $color-blue: "blue";
  ```

  ```scss
  // otherfile.scss

  @use "./variables.scss" as *;

  p {
    color: $color-blue;
  }
  ```

### Elements that are not Suitable for Attaching the Shadow DOM

- Elements related to headings, tables, form, img, inline elements (Ex: `a`, `span`).
- The Shadow DOM can be attached to any HTML tag. However, attaching it to one of these elements may not make sense and lead to displacements.

### Dimmed Layer

- Need to dim the main portion upon hovering over certain tooltips.
- Trigger the dimmed layer by creating and dispatching a custom event from the `tool-tip` component to the `top-header` (parent) component.
