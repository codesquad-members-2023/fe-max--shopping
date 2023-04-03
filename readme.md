# fe-max--shopping

## Table of Contents

- [Project Requirements](#project-requirements)
  - [About](#about)
  - [Key Features](#key-features)
- [Dev Log](#dev-log)

## Project Requirements

### About

- Amazon mainpage clone.

### Key Features

- [ ] Top Nav Bar
  - [ ] Login Section
    - [ ] Login "tooltip"
      - [ ] Appears after 1 second after page load
    - [ ] Login Section Hover
      - [ ] Login "tooltip" disappears
      - [ ] Login modal appears
      - [ ] Close modal when no longer hovering over the section or modal.
  - [ ] Shipping Section Hover
    - [ ] Shipping address modal appears
    - [ ] Close modal when no longer hovering over the section or modal.
  - [ ] Navbar expands the whole width of the viewport
    - [ ] Search bar grows when vw >= 1120px.

## Dev Log

### Web Components and SCSS

- SCSS cannot be hooked into Web Components.
- Idea: _compile SCSS files into CSS (using dart-sass compiler) and import it as text in JS. Then, insert that CSS string into the Web Component._
- Example

  ```zsh
  sass index.scss:build/css/index.css
  ```

  ```js
  const cssString = await (await fetch("build/css/index.css")).text();

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

#### Notes

- Although the overhead is minimal since it is fetched from my own server (relatively cheap), it is still a request/response cycle.
  - However, it is acceptable since the request is only sent once for each corresponding component (i.e. no need to fetch every time the component is generated).
