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
  - [Dimmed Layer/Backdrop](#dimmed-layerbackdrop)
  - [Keyboard Event](#keyboard-event)
  - [Side Bar](#side-bar)
  - [SoC](#soc)
    - [`SearchForm`, `AutocompletePanel`](#searchform-autocompletepanel)
  - [Reactive Programming](#reactive-programming)
- [Current Status](#current-status)

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

- [x] Top Nav Bar
  - [x] Login Section
    - [x] Login "tooltip"
      - [x] Appears after 1 second after page load.
    - [x] Login Section Hover
      - [x] Login "tooltip" disappears.
      - [x] Login modal appears.
      - [x] Close modal when no longer hovering over the section or modal.
      - [x] Dim main section.
  - [x] Shipping Section Hover
    - [x] Shipping address modal appears.
    - [x] Close modal when no longer hovering over the section or modal.
    - [x] Dim main section.
  - [x] Navbar expands the whole width of the viewport.
    - [x] Search bar grows when vw >= 1120px.
- [x] Hero Infinite Carousel
  - [x] Automatically move to next slide after 10s of no interaction.
- [x] Search Form
  - [x] Fetch autocomplete data
  - [x] Autocomplete Panel
    - [x] Use up/down arrows to navigate autocomplete options.
- [ ] Side Bar
  - [x] Open when burger button on sub nav is clicked.
  - [x] Fetch contents from server.
  - [ ] Main Menu
    - [x] Map main menu contents to corresponding sub menus.
    - [ ] Compressed portion of contents
  - [x] Sub Menus
- [x] Back Drop (dimmed layer)
- [x] Server
  - [x] Hero images endpoint
  - [x] Card images endpoint
  - [x] Search autocomplete endpoint
  - [x] Side bar contents endpoint

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

### Dimmed Layer/Backdrop

#### Ver. 1

- Need to dim the main portion upon hovering over certain tooltips, and upon showing autocomplete panel.
- Trigger the dimmed layer by creating and dispatching a custom event from the components to the `top-header` (parent) component.

#### Ver. 2

- Declare a single `back-drop` component in the body.
- Any component that needs a backdrop will have a reference to that `back-drop` component.
- Set the desired position and height of the backdrop when in need.

#### [Ver. 3](#passive-vs-reactive-backdrop)

- **Approach**
  - Make `back-drop` reactive instead of passive.
    - i.e. `back-drop` activates/deactivates based on external events in components that use `back-drop` but those components are unaware of `back-drop`.
- **Steps**
  - Register custom events (`"showSelf"`, `"hideSelf"`).
  - In `BackDrop`, loop through its _listenables_ and for each listenable, add event listeners to those custom events (and while doing so, include its backdrop logic - activate/deactivate).
  - A `ComponentWithBackDrop` component dispatches the custom event to itself when needed --> `BackDrop` activates/deactivates based on the custom event that occured in itself.
    - `ComponentWithBackDrop` components are unaware of `BackDrop`.
- **Save all instances of `ComponentWithBackDrop` in a static property.**
  - Use this static property to close all instances that are not currently being activated.
  - Hence, at any point in time, there can only be one `ComponentWithBackDrop` that is showing.
  - No need to handle z-index anymore.

### Keyboard Event

- When typing in Korean, the last character stays in "composing" state.
- The keyboard event fires twice when `isComposing` is `true`.
- To prevent double firing, we can ignore the first event that was fired, which is when `isComposing` is `true`.
  - i.e. when the input is in "composing" state and the arrow key is pressed, two of the same events are fired. The first should be ignored and only the second should fall through.

### Side Bar

- Possible approaches to map the options in the main menu to their corresponding sub menu.
  1. Assign ids, to begin with, in the original data.
  2. Use indices to assign ids in the fetched data.
- Side Bar data does not change often and the number of items is relatively small. Also, the ids are exclusively used for the UI. Therefore, there is really no other reason to assign ids in the data itself. Simply assign and use the indices once the data is fetched.

### SoC

- To what extent and by what standard should components and/or logic be separated?
- Is it ideal to separate things that, when alteration is needed, alter together at the same time?
- Am I separating things that only really make sense to be used together?
- _Think about the use cases of said components and logic rather than trying to separate everything just for the sake of separating or trying to blindly follow an architecture/pattern._

#### `SearchForm`, `AutocompletePanel`

- `AutocompletePanel` requires some sort of input/form from the user that it will base its contents on.
  - This is provided by `SearchForm` and hence, `AutocompletePanel` if needed, will be solely used for `SearchForm`.
- Therefore, consider `AutocompletePanel` an inherent part of `SearchForm` and focus on making `SearchForm` as reusable as possible.

##### Implementation

- `SearchFormService` receives an endpoint and a default search term to handle the business logic (fetching, serialize/deserialize, current/previous search term comparison).
- `AutocompletePanel` State
  - Search results - handled through `attributeChangedCallback` lifecycle.

### Reactive Programming

- **Objective:** build self-responsible modules that are focused on their own functionality rather than changing external state. —> Separation of Concerns
- Ex: whenever a `ComponentWithBackDrop` shows itself, activate the BackDrop component.
  - The position of the arrow’s tail represents the place of invocation.
  - Traditionally, the arrow’s tail is directly at the source itself. However, in reactive programming, the arrow's tail is not directly at the source. The source is unaware that it is triggering the arrow, and hence, also unaware of the arrow's target.
  - [`BackDrop`](#ver-3).

#### Passive vs Reactive BackDrop

<img src="docs/refImg/backdrop-passive.png" alt="Passive BackDrop" />
<img src="docs/refImg/backdrop-reactive.png" alt="Reactive BackDrop" />

## Current Status

### Search Form

- **미완성**
  - 자동완성 패널에 검색 단어 하이라이트.
  - 최근 검색어 저장.
- **Bug**
  - Search input에 있는 값을 전체 highlight(Ex: ctrl + a)을 해서 바로 새로운 값을 입력한 후 화살표를 누르면 입력값이 공백으로 대체됨.
    - Backspace으로 지우면 정상 작동함.
  - Search input에 focus를 해서 자동완성 패널이 열린 상태에서 "배송처" 또는 "로그인" 섹션을 hover 했다가 풀면 search input에 focus는 유지되지만 자동완성 패널이 닫힘.
    - 사용자가 직접 다른데를 클릭하고 다시 focus해야 자동완성 패널이 다시 열림.

### Side Bar

- **미완성**
  - "부서별 쇼핑"에서 첫 4개 옵션을 제외한 나머지 옵션들 압축.
  - 메뉴 내용 fetch시 loading indicator.

### Back Drop

- **미완성**
  - `BackDrop` component을 "reactive"하게 만드려고 했음.
    - 현재 상황
      - `ComponentWithBackDrop`에서 `this.backDrop`을 갖고 있음.
        - 즉, `ComponentWithBackDrop`을 상속받고 있는 View 컴포넌트들이 `this.backDrop`에 대해 알고 있고 직접 자기 자신을 `BackDrop`에 등록을 하고 있음.
    - 목표
      - View 컴포넌트에서 Back Drop을 몰라야 (즉, `this.backDrop`이 없어야 됨) 원하던대로 BackDrop이 온전히 reactive할 수 있음.
      - i.e. Back Drop의 사용자 view들은 Back Drop을 모르고, Back Drop은 view들을 알고 있는 구조.
    - [더 구체적인 의도 및 내용](https://github.com/codesquad-members-2023/fe-max--shopping/pull/98)
    - ["Reactive BackDrop" 참고](#passive-vs-reactive-backdrop)
