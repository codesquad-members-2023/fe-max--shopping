import { mainDimmed } from "../modal/modal";
import { loginModalView, extendLoginModalView } from "./loginModalView";

export const showLoginModalOnLoad = ($loginContainer: Element | null | undefined) => {
  const id = setTimeout(() => {
    appendLoginModalView(loginModalView);
  }, 1000);

  $loginContainer?.addEventListener("mouseenter", () => handleLoginModalClose(id), { once: true });
};

const appendLoginModalView = (view: string) => {
  const $login = document.querySelector(".nav-bar__login");

  $login?.insertAdjacentHTML("beforeend", view);
};

export const handleLoginModalClose = (id: number) => {
  if (id) {
    clearTimeout(id);
  }

  const $loginModal = document.querySelector("#login-modal");

  $loginModal?.remove();
};

export const handleNavBarLoginMouseEnter = (event: Event) => {
  const $loginContainer = event.currentTarget as HTMLElement;

  if ($loginContainer.classList.contains("open")) {
    return;
  }

  $loginContainer.classList.add("open");
  appendLoginModalView(extendLoginModalView);

  const undimmed = mainDimmed();
  const $extendLoginModal = document.querySelector("#extend-login-modal");

  $extendLoginModal?.addEventListener("mouseleave", (event) =>
    handleExtendLoginModalMouseLeave(event, $loginContainer, undimmed)
  );
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
