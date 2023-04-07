import { handleModalMouseLeave, mainDimmed } from "../modal/modal";
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
    handleModalMouseLeave(event, $loginContainer, undimmed)
  );
};

export const handleLoginModalClose = (id: number) => {
  if (id) {
    clearTimeout(id);
  }

  const $loginModal = document.querySelector("#login-modal");

  $loginModal?.remove();
};
