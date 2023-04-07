import { mainDimmed } from "../modal/modal";
import { loginModalView, extendLoginModalView } from "./loginModalView";

export const showLoginModalOnLoad = () => {
  setTimeout(() => {
    const $login = document.querySelector(".nav-bar__login");
    const $loginContainer = $login?.querySelector(".nav-bar__login-container");

    appendLoginModalView($login, loginModalView);
    $loginContainer?.addEventListener("mouseenter", (event) =>
      handleNavBarLoginMouseEnter(event, $login)
    );
    $loginContainer?.addEventListener("mouseover", removeModal, { once: true });
  }, 1000);
};

const appendLoginModalView = (targetElement: Element | null, view: string) => {
  targetElement?.insertAdjacentHTML("beforeend", view);
};

const handleNavBarLoginMouseEnter = (event: Event, $login: Element | null) => {
  const $loginContainer = event.currentTarget as HTMLElement;

  if ($loginContainer.classList.contains("open")) {
    return;
  }

  $loginContainer.classList.add("open");
  appendLoginModalView($login, extendLoginModalView);

  const undimmed = mainDimmed();
  const $extendLoginModal = document.querySelector("#extend-login-modal");

  $extendLoginModal?.addEventListener("mouseleave", (event) =>
    handleExtendLoginModalMouseLeave(event, $loginContainer, undimmed)
  );
};

const removeModal = () => {
  document.querySelector("#login-modal")?.remove();
};

const handleExtendLoginModalMouseLeave = (
  event: Event,
  $loginContainer: HTMLElement,
  undimmed: () => void
) => {
  const $extendLoginModal = event.currentTarget as HTMLElement;

  const id = setTimeout(() => {
    setTimeout(() => $extendLoginModal?.remove(), 500);
    $extendLoginModal?.classList.add("fadeOut");
    $loginContainer.classList.remove("open");

    undimmed();
  }, 500);

  $extendLoginModal?.addEventListener(
    "mouseleave",
    () => {
      clearTimeout(id);
    },
    { once: true }
  );
};
