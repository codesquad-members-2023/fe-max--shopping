import { extendLoginModalView, loginModalView } from "./loginView";

export const showLoginModalOnLoad = () => {
  setTimeout(() => {
    const $login = document.querySelector(".nav-bar__login");
    const $loginContainer = $login?.querySelector(".nav-bar__login-container");

    appendLoginModalView($login, loginModalView);
    $loginContainer?.addEventListener("mouseover", (event) =>
      handleNavBarLoginMouseOver(event, $login)
    );
    $loginContainer?.addEventListener("mouseover", removeLoginModal, { once: true });
  }, 1000);
};

const appendLoginModalView = (targetElement: Element | null, view: string) => {
  targetElement?.insertAdjacentHTML("beforeend", view);
};

const handleNavBarLoginMouseOver = (event: Event, $login: Element | null) => {
  const currentTarget = event.currentTarget as HTMLElement;

  if (currentTarget.classList.contains("open")) {
    return;
  }

  currentTarget.classList.add("open");
  appendLoginModalView($login, extendLoginModalView);
  mainDimmed();

  const $extendLoginModal = document.querySelector("#extend-login-modal");

  $extendLoginModal?.addEventListener("mouseout", (event) =>
    handleExtendLoginModalMouseout(event, currentTarget)
  );
};

const mainDimmed = () => {
  const $dim = document.querySelector(".dim");

  if ($dim) {
    $dim.className = "dimmed";
  }
};

const removeLoginModal = () => {
  document.querySelector("#login-modal")?.remove();
};

const handleExtendLoginModalMouseout = (event: Event, $loginContainer: HTMLElement) => {
  const currentTarget = event.currentTarget as HTMLElement;
  const $dimmed = document.querySelector(".dimmed");

  const id = setTimeout(() => {
    setTimeout(() => currentTarget?.remove(), 500);
    currentTarget?.classList.add("fadeOut");
    $loginContainer.classList.remove("open");

    if ($dimmed) {
      $dimmed.className = "dim";
    }
  }, 500);

  currentTarget?.addEventListener(
    "mouseover",
    () => {
      clearTimeout(id);
    },
    { once: true }
  );
};
